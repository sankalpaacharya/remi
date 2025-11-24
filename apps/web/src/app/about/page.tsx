import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github } from "lucide-react";

export default function About() {
  return (
    <div className="flex items-center justify-center h-full overflow-y-auto">
      <div className="text-center max-w-2xl p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          About Remi
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 px-4">
          Remi is a beautiful README generator designed to help developers
          create stunning documentation for their projects.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Created by
          </h2>
          <a
            href="https://github.com/sankalpaacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-3 p-3 sm:p-4 rounded-lg hover:bg-accent transition-colors"
          >
            <Avatar className="size-12 sm:size-16">
              <AvatarImage
                src="https://github.com/sankalpaacharya.png"
                alt="sankalpaacharya"
              />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <Github className="size-3.5 sm:size-4" />
              <span className="font-medium text-sm sm:text-base">
                @sankalpaacharya
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
