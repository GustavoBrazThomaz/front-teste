"use client";
import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import { getQueryClient } from "./query-client";

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={null}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
