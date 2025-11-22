import { create } from "zustand";

interface StoreState {
  repoUrl: string;
  setRepoUrl: (url: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  repoUrl: "https://github.com/sankalpaacharya/remi",
  setRepoUrl: (url: string) => set({ repoUrl: url }),
}));
