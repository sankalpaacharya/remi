import { create } from "zustand";

interface StoreState {
  repoUrl: string;
  setRepoUrl: (url: string) => void;
  markdownContent: string;
  setMarkdownContent: (content: string) => void;
  appendMarkdownContent: (content: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  repoUrl: "https://github.com/sankalpaacharya/remi",
  setRepoUrl: (url: string) => set({ repoUrl: url }),
  markdownContent: "# Remi\n\nSuper cool readme generator",
  setMarkdownContent: (content: string) => set({ markdownContent: content }),
  appendMarkdownContent: (content: string) =>
    set((state) => ({
      markdownContent: state.markdownContent + "\n\n" + content,
    })),
}));
