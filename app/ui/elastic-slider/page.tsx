import { Section } from "@/components/shared/section";
import TitleSection from "@/components/shared/title-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ElasticSlider from "./elastic-slider";

export default function Page() {
  return (
    <Section>
      <TitleSection>Elastic Slider</TitleSection>
      <p className="text-muted-foreground">
        I learnt and re-implemented from{" "}
        <Link
          href="https://x.com/samselikoff/status/1754622772288847880"
          className="underline decoration-solid underline-offset-4"
        >
          Sam Selikoff&apos;s craft.
        </Link>
      </p>
      <UIShell className="h-56 grid place-items-center">
        <ElasticSlider />
      </UIShell>
    </Section>
  );
}

function UIShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-accent border border-border rounded-xl p-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
