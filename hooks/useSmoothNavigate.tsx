"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSmoothNavigate() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const navigate = (path: string) => {
    setLoading(true);

    setTimeout(() => {
      router.push(path);
    }, 900); // small delay
  };

  return { navigate, loading };
}