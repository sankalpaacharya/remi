"use client";

import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function RepoInput() {
  const { repoUrl, setRepoUrl } = useStore();

  const displayUrl = repoUrl
    .replace(/^https?:\/\/github\.com\//, "")
    .replace(/\/$/, "");

  function onURLSubmit(url: string) {
    let fullUrl = url.trim();
    if (!fullUrl.startsWith("http")) {
      fullUrl = `https://github.com/${fullUrl}`;
    }
    fullUrl = fullUrl.replace(/\/$/, "");
    setRepoUrl(fullUrl);
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <Github className="size-3 sm:size-3.5" />
          <span className="text-xs max-w-[150px] sm:max-w-none truncate">
            {displayUrl}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 sm:w-auto">
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Input
              value={displayUrl}
              onChange={(e) => onURLSubmit(e.target.value)}
              placeholder="owner/repository"
              className="text-xs sm:text-sm"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
