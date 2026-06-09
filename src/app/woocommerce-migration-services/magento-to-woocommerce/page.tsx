import { MigrationPage } from "@/components/MigrationPage";
import { MAGENTO } from "@/content/migration";

export const metadata = MAGENTO.meta;

export default function Page() {
  return <MigrationPage data={MAGENTO} />;
}
