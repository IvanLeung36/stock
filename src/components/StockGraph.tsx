import React, { useEffect, useRef } from "react";

interface StockGraphProps {
  stocks: { symbol: string; price: number; time: string }[];
  time: string;
}

export let StockGraph: React.FC<StockGraphProps> = ({ stocks, time }) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.font = "16px Arial";

        stocks.forEach((stock, index) => {
          ctx.fillText(`${stock.symbol}: $${stock.price}`, 10, 30 + index * 30);
        });

        ctx.fillText(`Last updated: ${time}`, 10, 30 + stocks.length * 30 + 20);
      }
    }
  }, [stocks, time]);

  return <canvas ref={canvasRef} width={500} height={300}></canvas>;
};
