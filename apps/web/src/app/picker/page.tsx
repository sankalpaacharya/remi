"use client";

import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [filePath, setFilePath] = useState<string | undefined>(undefined);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFilePath(URL.createObjectURL(e.target.files[0]));
    }
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
              <img
                src={filePath || ""}
                alt="Preview"
                className="w-full h-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 hover:bg-background"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Change
              </Button>
              <Button className="flex-1">Continue</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
