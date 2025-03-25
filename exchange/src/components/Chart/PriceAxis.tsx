
import { useRef, useEffect } from "react";

interface Props {
  minPrice: number;
  maxPrice: number;
  offsetY: number;
  scale: number;
}

const PriceAxis: React.FC<Props> = ({ minPrice, maxPrice, offsetY, scale }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    // Set canvas dimensions based on parent
    canvas.width = 60;
    canvas.height = canvas.parentElement!.clientHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid parameters
    const step = 50; 
    const priceIncrement = 4000; 
    const basePrice = 0; 
  
    // Calculate initial y-position and price offset
    const initialY = offsetY % step;
    const initialPriceOffset = Math.trunc(-offsetY / step);
  
    // Render labels
    for (let y = initialY, i = 0; y < canvas.height; y += step, i++) {
      const textY = canvas.height - y;
  
      ctx.font = "12px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "right";

      const price = basePrice + (initialPriceOffset + i) * priceIncrement;
      
      ctx.fillText(price.toFixed(2), canvas.width - 5, textY);

    }
  }, [minPrice, maxPrice, offsetY]);
  
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "60px",
        height: "100%",
      }}
    />
  );
};

export default PriceAxis;
