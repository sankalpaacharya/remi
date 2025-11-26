"use client";
import { Stage, Layer, Image, Text } from "react-konva";
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
        <div className="border rounded-lg shadow-lg">
          <Stage width={stageWidth} height={stageHeight} className="">
            <Layer>
              {banner && (
                <Image
                  image={banner}
                  x={600}
                  y={400}
                  width={1000}
                  height={500}
                  draggable
                  opacity={0.5}
                  offsetX={1000 / 2}
                  offsetY={500 / 2}
                />
              )}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}
