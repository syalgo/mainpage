"use client";

import { useEffect, useRef } from "react";

const cropMap: Record<number, [number, number]> = {
  3:[0.15,0.38],4:[0.14,0.45],5:[0.14,0.45],6:[0.12,0.35],7:[0.13,0.39],8:[0.13,0.34],9:[0.13,0.39],
  10:[0.06,0.50],11:[0.06,0.50],12:[0.05,0.51],13:[0.05,0.51],14:[0.05,0.35],15:[0.05,0.35],
  16:[0.04,0.52],17:[0.04,0.52],18:[0.13,0.29],19:[0.05,0.94],20:[0.13,0.33],
  24:[0.12,0.24],26:[0.12,0.25],29:[0.12,0.38],33:[0.11,0.27],
  35:[0.12,0.96],36:[0.12,0.96],37:[0.12,0.96],
  38:[0.05,0.50],39:[0.04,0.42],40:[0.04,0.44],41:[0.04,0.44],
};

export default function SuwonQuestionVisual({ number, src }: { number: number; src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.onload = () => {
      const [top, bottom] = cropMap[number] ?? [0, 1];
      const sy = Math.max(0, Math.round(img.naturalHeight * top));
      const ey = Math.min(img.naturalHeight, Math.round(img.naturalHeight * bottom));
      const sh = Math.max(1, ey - sy);

      canvas.width = img.naturalWidth;
      canvas.height = sh;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, sy, img.naturalWidth, sh, 0, 0, img.naturalWidth, sh);

      const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const px = image.data;
      for (let i = 0; i < px.length; i += 4) {
        const r = px[i], g = px[i + 1], b = px[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const lum = (r + g + b) / 3;

        // 원본 페이지의 옅은 회색 워터마크만 흰색으로 정리하고
        // 표·그래프의 진한 선과 글자는 유지한다.
        if (max - min < 18 && lum >= 210 && lum <= 250) {
          px[i] = 255;
          px[i + 1] = 255;
          px[i + 2] = 255;
        }
      }
      ctx.putImageData(image, 0, 0);
    };
    img.src = src;
  }, [number, src]);

  return (
    <div className="suwon-2024-visual" aria-label={`${number}번 문제 자료`}>
      <canvas ref={canvasRef} />
    </div>
  );
}
