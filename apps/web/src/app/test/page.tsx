"use client";
import { Stage, Layer, Image, Group, Rect } from "react-konva";
import { useEffect, useState } from "react";
import EditorLeft from "./editor-left";

export default function Page() {
  const [banner, setBanner] = useState<HTMLImageElement | null>(null);
  const stageWidth = 1200;
  const stageHeight = 800;

  useEffect(() => {
    const img = new window.Image();
    img.src = "/stickers/banner.png";
    img.onload = () => {
      setBanner(img);
    };
  }, []);

  return (
    <div className="flex h-screen bg-background">
      <EditorLeft />

      <div className="flex-1 flex items-center justify-center p-8">
        <Stage width={stageWidth} height={stageHeight} className="">
          <Layer>
            {banner && (
              <Group x={600} y={400} draggable offsetX={1000 / 2} offsetY={500 / 2}>
                <Rect
                  width={1000}
                  height={500}
                  stroke="#e5e7eb"
                  strokeWidth={2}
                  cornerRadius={8}
                />
                <Image
                  image={banner}
                  width={1000}
                  height={500}
                  opacity={0.5}
                />
              </Group>
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
