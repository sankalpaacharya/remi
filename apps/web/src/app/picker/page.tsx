"use client";

import { Button } from "@/components/ui/button";
import { Upload, X, Pipette } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [filePath, setFilePath] = useState<string | undefined>(undefined);
  const [isPickingColor, setIsPickingColor] = useState(false);
  const [pickedColor, setPickedColor] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFilePath(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) {
            const url = URL.createObjectURL(file);
            setFilePath(url);
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  const handleImageLoad = () => {
    const img = imageRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0);
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isPickingColor) return;

    const img = imageRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    const pixelX = Math.floor(x * scaleX);
    const pixelY = Math.floor(y * scaleY);

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const pixel = ctx.getImageData(pixelX, pixelY, 1, 1).data;
      const hex = `#${(
        (1 << 24) +
        (pixel[0] << 16) +
        (pixel[1] << 8) +
        pixel[2]
      )
        .toString(16)
        .slice(1)}`;
      setPickedColor(hex);
      setIsPickingColor(false);
    }
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isPickingColor) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        {!filePath ? (
          <div
            className="
              border-2 border-dashed rounded-lg p-12 text-center
              transition-colors cursor-pointer
              border-muted-foreground/25 hover:border-muted-foreground/50
            "
          >
            <input
              type="file"
              accept="image/*"
              className="border"
              onChange={handleUpload}
            />

            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              or paste from clipboard (Ctrl+V)
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="relative border rounded-lg overflow-hidden">
              <canvas ref={canvasRef} className="hidden" />
              <img
                ref={imageRef}
                src={filePath || ""}
                alt="Preview"
                className={`w-full h-auto ${
                  isPickingColor ? "cursor-crosshair" : ""
                }`}
                onLoad={handleImageLoad}
                onClick={handleImageClick}
                onMouseMove={handleImageMouseMove}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                onClick={() => setFilePath(undefined)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {pickedColor && (
              <div className="flex items-center gap-2 p-3 border rounded-lg bg-muted/30">
                <div
                  className="w-10 h-10 rounded border border-border"
                  style={{ backgroundColor: pickedColor }}
                />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Picked Color</p>
                  <p className="font-mono text-sm font-medium">{pickedColor}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(pickedColor)}
                >
                  Copy
                </Button>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsPickingColor(!isPickingColor)}
                className="flex-1"
              >
                <Pipette className="mr-2 h-4 w-4" />
                {isPickingColor ? "Cancel" : "Pick Color"}
              </Button>
              <Button className="flex-1">Continue</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
