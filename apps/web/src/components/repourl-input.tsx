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
          <Github className="size-3.5" />
          <span className="text-xs">{displayUrl}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Input
              value={displayUrl}
              onChange={(e) => onURLSubmit(e.target.value)}
              placeholder="owner/repository"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
