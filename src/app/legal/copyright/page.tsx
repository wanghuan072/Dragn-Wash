import LegalPage from "@/page/legal/LegalPage";
import { metadataFor } from "@/seo/metadata";
export const metadata = metadataFor("copyright", "/legal/copyright");
export default function Page() { return <LegalPage kind="copyright" path="/legal/copyright" />; }
