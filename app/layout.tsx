import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfian Rahman | Software Engineer",
  description: "Portfolio Alfian Rahman — backend systems, platform engineering, and React micro-frontends.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
