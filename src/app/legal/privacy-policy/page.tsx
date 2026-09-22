import LegalPage from "@/page/legal/LegalPage";
import { metadataFor } from "@/seo/metadata";
export const metadata = metadataFor("privacyPolicy", "/legal/privacy-policy");
export default function Page() { return <LegalPage kind="privacy" path="/legal/privacy-policy" />; }
