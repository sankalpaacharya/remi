"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, TypeIcon, StickerIcon } from "lucide-react";

export default function EditorLeft() {
  return (
    <div className="h-screen w-72 flex flex-col bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-r border-border/40">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/40">
        <h2 className="font-semibold text-sm tracking-tight">Editor</h2>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          Customize your canvas
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          {/* Image Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-primary" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
                Image
              </h3>
            </div>
            <div className="space-y-3 pl-5 border-l border-border/30">
              <div className="space-y-1.5">
                <Label className="text-[11px] font-medium text-muted-foreground">
                  Upload
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="h-9 cursor-pointer text-xs file:mr-4 file:px-3 file:py-1 file:rounded-sm file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-[11px] font-medium text-muted-foreground">
                    Opacity
                  </Label>
                  <span className="text-[10px] font-mono text-muted-foreground/70">
                    50%
                  </span>
                </div>
                <Input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  defaultValue="50"
                  className="h-2 cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5">
              <TypeIcon className="w-3.5 h-3.5 text-primary" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
                Text
              </h3>
            </div>
            <div className="space-y-3 pl-5 border-l border-border/30">
              <div className="space-y-1.5">
                <Label className="text-[11px] font-medium text-muted-foreground">
                  Content
                </Label>
                <Input
                  type="text"
                  placeholder="Enter text..."
                  className="h-9 text-xs placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-[11px] font-medium text-muted-foreground">
                    Font Size
                  </Label>
                  <span className="text-[10px] font-mono text-muted-foreground/70">
                    60px
                  </span>
                </div>
                <Input
                  type="range"
                  min="12"
                  max="120"
                  defaultValue="60"
                  className="h-2 cursor-pointer accent-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] font-medium text-muted-foreground">
                  Color
                </Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    defaultValue="#ffffff"
                    className="h-9 w-14 cursor-pointer p-1 rounded-md"
                  />
                  <Input
                    type="text"
                    defaultValue="#ffffff"
                    className="h-9 flex-1 text-xs font-mono uppercase"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stickers Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5">
              <StickerIcon className="w-3.5 h-3.5 text-primary" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
                Stickers
              </h3>
            </div>
            <div className="pl-5 border-l border-border/30">
              <div className="grid grid-cols-4 gap-2">
                {["🎨", "⭐", "💫", "🎯", "🚀", "💡", "✨", "🔥"].map((emoji, i) => (
                  <button
                    key={i}
                    className="aspect-square border border-border/40 rounded-md flex items-center justify-center text-md hover:bg-accent hover:border-primary/50 active:scale-95 transition-all duration-200"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-border/40 bg-muted/20">
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          <span>Drag elements to reposition</span>
        </div>
      </div>
    </div>
  );
}
