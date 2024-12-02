"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { signIn } from "@/app/actions/auth";

export default function ButtonLogin({ nickname }: { nickname: string }) {
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(
    async (nickname: string) => {
      if (!nickname.includes("#")) {
        setError("Please include a # in your nickname");
        return;
      }

      await signIn({ nickname });
    },
    [setError]
  );

  return (
    nickname && (
      <>
        <Button
          variant={error ? "destructive" : "outline"}
          onClick={() => login(nickname)}
        >
          {nickname}
        </Button>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </>
    )
  );
}
