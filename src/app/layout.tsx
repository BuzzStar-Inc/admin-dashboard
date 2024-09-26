import type { Metadata } from "next";
import "./globals.css";
import { Avenir } from "@/lib/custom-fonts";



export const metadata: Metadata = {
  title: "BuzzStar | Super Admin",
  description: "Video call your favorite star",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Avenir.variable}  antialiased bg-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
