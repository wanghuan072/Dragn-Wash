import LegalPage from "@/page/legal/LegalPage";
import { metadataFor } from "@/seo/metadata";
export const metadata = metadataFor("contactUs", "/legal/contact-us");
export default function Page() { return <LegalPage kind="contact" path="/legal/contact-us" />; }
