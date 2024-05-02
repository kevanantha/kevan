import { cn } from "@/lib/utils";

export default function TitleSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("font-medium", className)}>{children}</h2>;
}
