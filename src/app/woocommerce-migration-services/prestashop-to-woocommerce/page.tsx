import { MigrationPage } from "@/components/MigrationPage";
import { PRESTASHOP } from "@/content/migration";

export const metadata = PRESTASHOP.meta;

export default function Page() {
  return <MigrationPage data={PRESTASHOP} />;
}
