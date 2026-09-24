import type { Metadata } from "next";
import Script from "next/script";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EK27YWLDC3" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK27YWLDC3');`}
        </Script>
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
