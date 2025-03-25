import React, { useRef, useEffect, useState, useCallback, useReducer } from "react";
import PriceAxis from "./PriceAxis";
import TimeAxis from "./TimeAxis";
import CandleChart from "./CandleChart";
import { useChartContext } from "../../contexts/ChartContext";
import { formatDate } from "date-fns";

const panReducer = (state: any, action: any) => {
  switch (action.type) {
    case "PAN":
      return { ...state, offsetY: state.offsetY + action.deltaY };
    default:
      return state;
  }
};


const InfiniteCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isDragging = useRef(false); 
  const startX = useRef(0);
  const startY = useRef(0);

  const {offsetX, offsetY} = useChartContext();
  const [state, dispatch] = useReducer(panReducer, { offsetY: 0 });
  const [scale, setScale] = useState(1);

  

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid(ctx);
    drawAxes(ctx);

    
  }, [state.offsetY, scale]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    ctx.translate(0, ctx.canvas.height);
    ctx.scale(1, -1);
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);


  }, []); 

  const drawGrid = (ctx: CanvasRenderingContext2D) => {
    const step = 150 * scale; 
    const stepx = 50;

    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;

    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x + (offsetX.current % step), 0);
      ctx.lineTo(x + (offsetX.current % step), height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += stepx) {
      ctx.beginPath();
      ctx.moveTo(0, y + (offsetY.current % stepx));
      ctx.lineTo(width, y + (offsetY.current % stepx));
      ctx.stroke();
    }
  };

  const drawAxes = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    // X-Axis
    ctx.beginPath();
    ctx.moveTo(0, offsetY.current);
    ctx.lineTo(ctx.canvas.width, offsetY.current);
    ctx.stroke();

    // Y-Axis
    ctx.beginPath();
    ctx.moveTo(offsetX.current, 0);
    ctx.lineTo(offsetX.current, ctx.canvas.height);
    ctx.stroke();
  };

  // Panning (Drag to move)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      offsetX.current += e.clientX - startX.current;
      offsetY.current -= e.clientY - startY.current;

      const deltaY = e.clientY - startY.current;
      dispatch({ type: "PAN", deltaY });

      startX.current = e.clientX;
      startY.current = e.clientY;

      draw();
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp); 

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [draw]);

  // Zooming 
  useEffect(() => {
    const canvas = canvasRef.current;
    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
      setScale((prevScale) => {
        const newScale = e.deltaY > 0 ? prevScale * 1.1 : prevScale * 0.9;
        return Math.max(0.1, Math.min(newScale, 10)); 
      });
      draw(); 
    };

    if (canvas) {
      canvas.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("wheel", handleWheel);
      }
    };
  }, [draw]);





  

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <canvas ref={canvasRef} />
      <CandleChart offsetX={offsetX.current} offsetY={offsetY.current} />
      <PriceAxis minPrice={0} maxPrice={5000} offsetY={offsetY.current} scale={scale} />
      <TimeAxis startTime={0} endTime={360000} offsetX={offsetX.current} scale={scale} />
    </div>
  );
};

export default InfiniteCanvas;

