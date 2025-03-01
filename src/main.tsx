import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient.ts";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
