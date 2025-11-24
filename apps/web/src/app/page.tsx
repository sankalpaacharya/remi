"use client";
import { ReadmeMaker } from "@/components/maker";

export default function Home() {
  return (
    <div className="flex justify-center gap-2 items-center h-full flex-col w-full overflow-hidden">
      <div className="flex-1 p-1 sm:p-2 w-full min-h-0">
        <div className="border w-full h-full flex">
          <ReadmeMaker />
        </div>
      </div>
    </div>
  );
}
