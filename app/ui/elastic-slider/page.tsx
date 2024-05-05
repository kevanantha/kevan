import { Section } from "@/components/shared/section";
import TitleSection from "@/components/shared/title-section";
import Link from "next/link";
import ElasticSlider from "./elastic-slider";
import { UIShell } from "@/components/shared/ui-shell";

export default function Page() {
  return (
    <Section>
      <TitleSection>Elastic Slider</TitleSection>
      <p className="text-muted-foreground">
        Learned and reimplemented from{" "}
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
