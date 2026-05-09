"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Global UI Crash", error);
  }, [error]);

  return (
    <div className="">
        TODO:
        <h2>App ran into Error!</h2>
        <Button onClick={() => reset()} size="lg">
            Try again
        </Button>
    </div>
  );
}
