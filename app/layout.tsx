import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syifani Adillah Salsabila | Cybersecurity & Infrastructure Portfolio",
  description:
    "Portfolio of Syifani Adillah Salsabila across cybersecurity, network infrastructure, cloud, DevOps, and technical support.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
