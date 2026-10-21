"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Reads the year in the browser so a statically built page never goes stale.
// The server snapshot is a fallback used only for the initial HTML.
export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <span suppressHydrationWarning>{year}</span>;
}
