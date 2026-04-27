import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Abdul Jalil Tamjid — Software Engineer & Researcher',
  description: 'Portfolio of Abdul Jalil Tamjid, software engineer and machine learning researcher.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}