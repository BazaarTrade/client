import React, { useCallback, useEffect, useRef } from 'react'
import { useChartContext } from '../../contexts/ChartContext';
import { formatDate } from 'date-fns';

interface Props {
  offsetX: number;
  offsetY: number;
}

export interface CandleStick {
  pair: string;
  timeframe: string;
  openTime: string;
  closeTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  isClosed: boolean;
}

const CandleChart: React.FC<Props> = ({offsetX, offsetY}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    const { candleStickList, lastCandleStick, prevCandleStick, baseTime } = useChartContext();
    
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = canvas.parentElement!.clientWidth;
        canvas.height = canvas.parentElement!.clientHeight;

        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
    }, []);

    useEffect(() => {

      console.log(lastCandleStick);
      if (candleStickList.length === 0) return;
  
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      if (!lastCandleStick) return;
      if (prevCandleStick && prevCandleStick.isClosed === false) {
        
        eraseLastCandle(prevCandleStick);
      }
  
      if (lastCandleStick) {
        drawCandle(lastCandleStick);
      }
    }, [candleStickList, lastCandleStick]); 

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawAllCandles();
      if (lastCandleStick) {
        drawCandle(lastCandleStick)}
    }, [offsetX, offsetY]);
  
    const drawAllCandles = () => {
      candleStickList.forEach((candle, index) => {
        drawCandle(candle);
      }
    );
    };
  
    const drawCandle = (candle: CandleStick) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      const { x, yOpen, yClose, yHigh, yLow, candleWidth } = getCandlePosition(candle);
  
      const isBullish = parseFloat(candle.closePrice) > parseFloat(candle.openPrice);
      ctx.fillStyle = isBullish ? "green" : "red";
      ctx.strokeStyle = isBullish ? "green" : "red";
  
      // Draw wick
      ctx.beginPath();
      ctx.moveTo(x + candleWidth / 2, yHigh);
      ctx.lineTo(x + candleWidth / 2, yLow);
      ctx.stroke();
  
      // Draw body
      const height = Math.abs(yClose - yOpen);
      if (height === 0) {
        ctx.fillRect(x, Math.min(yOpen, yClose), candleWidth, 1);
      }
      else {
        ctx.fillRect(x, Math.min(yOpen, yClose), candleWidth, height);
      }
      
    };
  
    const eraseLastCandle = (candle: CandleStick) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      const { x, candleWidth } = getCandlePosition(candle);
  
      ctx.clearRect(x - 2, 0, candleWidth + 4, canvas.height);
    };

    const getCandlePosition = (candle: CandleStick) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, yOpen: 0, yClose: 0, yHigh: 0, yLow: 0, candleWidth: 0 };
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return { x: 0, yOpen: 0, yClose: 0, yHigh: 0, yLow: 0, candleWidth: 0 };
  
      const priceperpixel = 80;
  
      const openTime = formatDate(new Date(candle.openTime), "mm");
  
      const candleSpacingX = 20;
      const candleWidth = candleSpacingX - 2;
      const scaleX = (time: number) => time * 25;
      const scaleY = (price: any) => price / priceperpixel;
  
      return {
        x: scaleX(parseFloat(openTime)) + offsetX,
        yOpen: scaleY(candle.openPrice) + offsetY,
        yClose: scaleY(candle.closePrice) + offsetY,  
        yHigh: scaleY(candle.highPrice) + offsetY,  
        yLow: scaleY(candle.lowPrice) + offsetY,
        candleWidth,
      };
    };

  return (
    <canvas
    ref={canvasRef}
    style={{
      position: "absolute",
      margin: 0,
      padding: 0,
      right: 0,
      top: 0,
      height: "100%",
      width: "100%",
      zIndex: 1, 
      pointerEvents: "none",

    }}
  />
  )
}

export default CandleChart