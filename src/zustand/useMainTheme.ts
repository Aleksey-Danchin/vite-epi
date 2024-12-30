import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn } from "zustand/traditional";
import { isEqual } from "lodash";
import { persist } from "zustand/middleware";

type MainThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useMainTheme = createWithEqualityFn<MainThemeStore>()(
  persist(
    immer((set) => ({
      theme: "night",
      setTheme: (theme) => set({ theme }),
    })),

    {
      name: "__main_theme__",
      version: 1,
    }
  ),

  isEqual
);
