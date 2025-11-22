"use client";
import { StatusBar } from "@/components/status-bar";
import { ReadmeMaker } from "@/components/maker";
import LeftSideBar from "@/components/editor/left-sidebar";

export default function Home() {
  return (
    <div className="flex justify-center gap-2 items-center h-screen flex-col w-full">
      <StatusBar />
      <div className="flex-1 p-2 w-full h-full">
        <div className="border w-full h-full flex">
          <ReadmeMaker />
        </div>
      </div>
    </div>
  );
}
