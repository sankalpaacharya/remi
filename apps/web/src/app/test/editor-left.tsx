"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditorLeft() {
  return (
    <div className="h-screen w-64 flex flex-col font-mono text-xs sm:text-sm border-r">
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Image
            </h3>
            <div className="space-y-3">
              <div>
                <Label className="text-xs text-muted-foreground">Upload</Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="mt-1.5 cursor-pointer text-xs"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Opacity</Label>
                <Input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  defaultValue="0.5"
                  className="mt-1.5"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Text
            </h3>
            <div className="space-y-3">
              <div>
                <Label className="text-xs text-muted-foreground">Content</Label>
                <Input
                  type="text"
                  placeholder="Enter text..."
                  className="mt-1.5 text-xs"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">
                  Font Size
                </Label>
                <Input
                  type="range"
                  min="12"
                  max="120"
                  defaultValue="60"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Color</Label>
                <Input
                  type="color"
                  defaultValue="#ffffff"
                  className="mt-1.5 h-9 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Stickers Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Stickers
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {["🎨", "⭐", "💫", "🎯", "🚀", "💡"].map((emoji, i) => (
                <button
                  key={i}
                  className="aspect-square border rounded flex items-center justify-center text-2xl hover:bg-accent transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 sm:px-4 py-2 border-t shrink-0">
        <div className="text-[10px] sm:text-xs text-muted-foreground">
          <span>Drag to move elements</span>
        </div>
      </div>
    </div>
  );
}
