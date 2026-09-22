import LegalPage from "@/page/legal/LegalPage";
import { metadataFor } from "@/seo/metadata";
export const metadata = metadataFor("termsOfService", "/legal/terms-of-service");
export default function Page() { return <LegalPage kind="terms" path="/legal/terms-of-service" />; }
