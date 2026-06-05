import { MigrationPage } from "@/components/MigrationPage";
import { CORE_PAGE } from "@/content/migration";

export const metadata = CORE_PAGE.meta;

export default function Page() {
  return <MigrationPage data={CORE_PAGE} />;
}
