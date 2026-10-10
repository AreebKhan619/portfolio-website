import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TouchActive } from "@/components/touch-active";
import { getProfile } from "@/lib/content";
import "./globals.css";

/**
 * Apple devices render SF Pro from the system stack (see --font-sans); Inter,
 * with its optical-size axis, stands in everywhere else. Not preloaded, so
 * Apple devices never download it.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  preload: false,
});

/** Terminal and key caps only; ui-monospace (SF Mono) wins on Apple devices. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const { site, personalInfo } = await getProfile();
  const title = `${personalInfo.name} — ${personalInfo.jobTitle}`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${personalInfo.name}` },
    description: site.description,
    applicationName: site.name,
    keywords: site.keywords,
    authors: [{ name: personalInfo.fullName, url: site.url }],
    creator: personalInfo.fullName,
    alternates: { canonical: "/" },
    openGraph: {
      type: "profile",
      url: "/",
      siteName: site.name,
      title,
      description: site.description,
      locale: site.locale,
      firstName: personalInfo.givenName,
      lastName: personalInfo.familyName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: site.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // Icons come from the file conventions: app/icon.tsx, app/apple-icon.tsx, app/favicon.ico.
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <noscript>
          <style>{`[data-fade-in]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TouchActive />
      </body>
    </html>
  );
}
