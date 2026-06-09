import { LandingPage } from "@/components/LandingPage";
import { CORE, metaFor } from "@/content/pages";

export const metadata = metaFor(CORE);

export default function Page() {
  return <LandingPage content={CORE} />;
}
