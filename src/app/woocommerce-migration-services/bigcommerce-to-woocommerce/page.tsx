import { MigrationPage } from "@/components/MigrationPage";
import { BIGCOMMERCE } from "@/content/migration";

export const metadata = BIGCOMMERCE.meta;

export default function Page() {
  return <MigrationPage data={BIGCOMMERCE} />;
}
