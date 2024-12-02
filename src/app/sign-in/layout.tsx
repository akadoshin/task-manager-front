import Container from "@/components/layout/container";
import Wave from "@/components/ui/wave";

import Scene from "@/components/three/Scene";

import { getSession } from "../actions/auth";
import { cn } from "@/lib/utils";

export default async function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = !!(await getSession());

  return (
    <main className="flex min-h-screen flex-col">
      <Wave
        className={cn("md:hidden", {
          " min-h-[10px]": session,
        })}
      >
        {!session && <Scene />}
      </Wave>
      <Container className="px-6 mt-0 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 md:mt-0 md:space-y-12">
        {children}
      </Container>
    </main>
  );
}
