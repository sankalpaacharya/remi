"use client";
import { Stage, Layer, Image, Text } from "react-konva";
import { useEffect, useState } from "react";

export default function Page() {
  const [banner, setBanner] = useState<HTMLImageElement | null>(null);
  const stageWidth = 1000;
  const stageHeight = 600;
  const text = "Sankalpa Acharya";
  const fontSize = 60;

  useEffect(() => {
    const img = new window.Image();
    img.src = "/stickers/banner.png";
    img.onload = () => {
      setBanner(img);
    };
  }, []);

  return (
    <div className="border w-full">
      <Stage
        width={stageWidth}
        height={stageHeight}
        className="border overflow-hidden"
      >
        <Layer>
          {banner && (
            <Image
              image={banner}
              x={0}
              y={0}
              draggable
              opacity={0.5}
              width={1000}
            />
          )}
          <Text
            x={stageWidth / 2}
            y={stageHeight / 2}
            text={text}
            fontSize={fontSize}
            fill="white"
            fontFamily="Arial"
            fontStyle="bold"
            draggable
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.7}
            offsetX={fontSize * (text.length / 4)}
            offsetY={fontSize / 2}
          />
        </Layer>
      </Stage>
    </div>
  );
}
