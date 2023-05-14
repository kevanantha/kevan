import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Kevin Anantha",
  description: "Kevin Anantha's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
