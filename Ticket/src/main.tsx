import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import "bootstrap/dist/css/bootstrap.css";
import { RandomNumberProvider } from "./Components/Ticket/RandomNumberContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RandomNumberProvider>
        <RouterProvider router={router} />
      </RandomNumberProvider>
    </QueryClientProvider>
  </StrictMode>,
);
