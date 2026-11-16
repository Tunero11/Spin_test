import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Box Earn",
  description: "Complete tasks, invite friends and earn mystery boxes."
};
export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 1,
  themeColor: "#090713"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}