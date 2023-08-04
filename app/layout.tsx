import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Just 3D";
let description = "Generate 3D Objects";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/iamges/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
