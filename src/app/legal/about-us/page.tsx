import LegalPage from "@/page/legal/LegalPage";
import { metadataFor } from "@/seo/metadata";
export const metadata = metadataFor("aboutUs", "/legal/about-us");
export default function Page() { return <LegalPage kind="about" path="/legal/about-us" />; }
