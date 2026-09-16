import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syifani Adillah Salsabila | Cybersecurity, Infrastructure & DevOps",
  description:
    "Engineering portfolio of Syifani Adillah Salsabila covering cybersecurity, IAM, network infrastructure, cloud, DevOps, Linux administration, and software engineering.",
  keywords: [
    "Syifani Adillah Salsabila",
    "cybersecurity",
    "infrastructure engineering",
    "DevOps",
    "cloud engineering",
    "network engineering",
    "IAM",
    "Linux administration",
  ],
  authors: [{ name: "Syifani Adillah Salsabila" }],
  creator: "Syifani Adillah Salsabila",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Syifani Adillah Salsabila | Engineering Portfolio",
    description:
      "Cybersecurity, infrastructure, IAM, cloud/DevOps, networking, and software engineering portfolio.",
  },
  twitter: {
    card: "summary",
    title: "Syifani Adillah Salsabila | Engineering Portfolio",
    description:
      "Cybersecurity, infrastructure, IAM, cloud/DevOps, networking, and software engineering portfolio.",
  },
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
