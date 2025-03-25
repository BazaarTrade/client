import React, { useRef, useEffect } from "react";
import { useChartContext } from "../../contexts/ChartContext";
import { formatDate } from "date-fns";

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

const tempChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { candleStickList } = useChartContext();
  const canvasWidthRef = useRef(0);
  const canvasHeightRef = useRef(0);
  const prevCandleIndexRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scaleY = (price: any) => (63000 - price) * (canvas.height / (63000 - 58000));
    const scaleX = (time: number) => time * (canvas.width / 60);

    // Set canvas dimensions & store them in refs
    canvas.width = canvas.parentElement!.clientWidth;
    canvas.height = canvas.parentElement!.clientHeight;
    canvasWidthRef.current = canvas.width;
    canvasHeightRef.current = canvas.height;

  }, []);

  useEffect(() => {
    if (candleStickList.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lastCandleIndex = candleStickList.length - 1;
    const lastCandle = candleStickList[lastCandleIndex];
    const prevCandle = candleStickList[prevCandleIndexRef.current];

    if (!lastCandle) return;
    if (prevCandle.isClosed === false) {
      eraseLastCandle(prevCandleIndexRef.current);
    }

    drawCandle(lastCandle);
    prevCandleIndexRef.current = lastCandleIndex;
  }, [candleStickList]); 

  const drawAllCandles = () => {
    candleStickList.forEach((candle, index) => {
      drawCandle(candle);
    });
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
    ctx.fillRect(x, Math.min(yOpen, yClose), candleWidth, Math.abs(yClose - yOpen));
  };

  const eraseLastCandle = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, candleWidth } = getCandlePosition(candleStickList[index]);

    ctx.clearRect(x - 2, 0, candleWidth + 4, canvas.height);
  };

  const getCandlePosition = (candle: CandleStick) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, yOpen: 0, yClose: 0, yHigh: 0, yLow: 0, candleWidth: 0 };

    const ctx = canvas.getContext("2d");
    if (!ctx) return { x: 0, yOpen: 0, yClose: 0, yHigh: 0, yLow: 0, candleWidth: 0 };

    const priceperpixel = 0.2;

    const openTime = formatDate(new Date(candle.openTime), "mm");

    const candleSpacingX = 20;
    const candleWidth = candleSpacingX - 2;
    const scaleX = (time: number) => time * (canvas.width / 60);
    const scaleY = (price: any) => price / priceperpixel;

    return {
      x: scaleX(parseFloat(openTime)),
      yOpen: scaleY(candle.openPrice),
      yClose: scaleY(candle.closePrice),
      yHigh: scaleY(candle.highPrice),
      yLow: scaleY(candle.lowPrice),
      candleWidth,
    };
  };

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default tempChart;