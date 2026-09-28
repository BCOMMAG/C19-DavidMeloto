import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://davidmeloto.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Meloto Advocacia | Especialista em Direito Trabalhista - Curitiba PR",
    template: "%s | David Meloto Advocacia",
  },
  description:
    "Defesa ágil, estratégica e intransigente em Direito do Trabalho, Consultoria de RH, Direito do Consumidor e Cível. Sede física no Ahú em Curitiba/PR e atendimento online em todo o Brasil.",
  keywords: [
    "advogado trabalhista curitiba",
    "david meloto advocacia",
    "advogado direito do trabalho curitiba",
    "rescisao indireta e justa causa clt",
    "calculo de horas extras e verbas rescisorias",
    "fraude pejotizacao vinculo de emprego",
    "consultoria de rh preventivo trabalhista curitiba",
    "advogado consumidor e civel ahu curitiba",
    "david meloto advogado oab pr",
  ],
  authors: [{ name: "David Meloto Duarte Junior" }],
  creator: "David Meloto Duarte Junior",
  publisher: "David Meloto Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "David Meloto Advocacia | Especialista em Direito Trabalhista - Curitiba PR",
    description:
      "Defesa ágil, estratégica e intransigente em Direito do Trabalho, Consultoria de RH, Direito do Consumidor e Cível. Sede física no Ahú em Curitiba/PR e atendimento online em todo o Brasil.",
    siteName: "David Meloto Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "David Meloto Advocacia - Especialista em Direito Trabalhista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Meloto Advocacia | Especialista em Direito Trabalhista - Curitiba PR",
    description:
      "Soluções jurídicas estratégicas e transparentes em Direito do Trabalho e Consultoria de RH. Sede no Ahú em Curitiba/PR e atendimento online em todo o Brasil.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}