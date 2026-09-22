import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { metadataFor } from "@/seo/metadata";
import { siteName, siteUrl } from "@/config/site";
import "@/style/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  generator: "Next.js",
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  ...metadataFor("home", "/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.png` } },
                { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteName, url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-US" },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
