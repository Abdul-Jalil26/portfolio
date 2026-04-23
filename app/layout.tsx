import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Jalil Tamjid — AI Engineer & Researcher",
  description: "PhD Applicant | AI Engineer | Medical Imaging Researcher | Backend Developer",
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