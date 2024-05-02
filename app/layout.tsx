import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

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
    <html lang="en" className="scrollbar-hide">
      <body className={GeistSans.className}>
        <main className="flex min-h-screen max-w-2xl mx-auto flex-col mt-12 px-6">
          <div className="flex flex-col gap-16 sm:gap-32 mb-20">
            <div>
              <Link href="/">
                <h1 className="font-medium">Kevin Anantha</h1>
              </Link>
              <p className="text-muted-foreground font-medium leading-none">
                Frontend Engineer
              </p>
            </div>

            {children}
          </div>

          {/* <div className="block w-full py-2 text-muted-foreground relative bottom-1 border-t">
            <span>
              Design inspired by <a href="https://emilkowal.ski">Emil</a>
            </span>
          </div> */}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
