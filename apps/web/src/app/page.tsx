"use client";
import {StatusBar} from "@/components/status-bar";
import { ReadmeMaker } from "@/components/maker";

export default function Home() {
	return (
		<div className="flex justify-center gap-2 items-center h-screen flex-col w-full">
			<StatusBar/>
			<div className="flex-1 p-2 w-full h-full">
			<div className="border w-full h-full">
				<ReadmeMaker/>
			</div>

			</div>
		</div>
	);
}
