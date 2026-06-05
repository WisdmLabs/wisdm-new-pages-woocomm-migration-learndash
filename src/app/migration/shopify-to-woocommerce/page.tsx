import { MigrationPage } from "@/components/MigrationPage";
import { SHOPIFY } from "@/content/migration";

export const metadata = SHOPIFY.meta;

export default function Page() {
  return <MigrationPage data={SHOPIFY} />;
}
