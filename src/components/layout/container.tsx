import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={cn("container mx-auto px-4", className)}>
      {children}
    </section>
  );
}
