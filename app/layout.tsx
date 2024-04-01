import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passbook App",
  description: "Track your expenses and income with Passbook App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
