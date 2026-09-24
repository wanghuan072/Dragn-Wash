/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import SocialShare from "@/components/SocialShare";
import { metadataFor } from "@/seo/metadata";
import { siteName, siteUrl } from "@/config/site";
import "@/style/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  generator: "Next.js",
  ...metadataFor("home", "/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EK27YWLDC3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EK27YWLDC3');
            `,
          }}
        />
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
        <SocialShare variant="floating" />
      </body>
    </html>
  );
}
