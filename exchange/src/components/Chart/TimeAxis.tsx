import { useRef, useEffect } from "react";

interface Props {
  startTime: number; 
  endTime: number;   
  offsetX: number;  
  scale: number;     
}

const TimeAxis: React.FC<Props> = ({ startTime, endTime, offsetX, scale }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement!.clientWidth;
    canvas.height = 30; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width, 0);



    const step = 150 * scale;
    const timeIncrement = 5 * 60 * 1000; 
    const baseTime = Date.now();

    const initialX = offsetX % step;
    const initialTimeOffset = Math.trunc(-offsetX / step);

    for (let x = initialX, i = 0; x < canvas.width; x += step, i++) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.font = "12px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      const time = new Date(baseTime + (initialTimeOffset + i) * timeIncrement);
      const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      ctx.fillText(timeString, x, canvas.height - 5);

      ctx.restore();
    }
  }, [startTime, endTime, offsetX, scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "30px",
      }}
    />
  );
};

export default TimeAxis;


