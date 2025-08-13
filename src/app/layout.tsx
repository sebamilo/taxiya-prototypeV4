import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxiYa — Prototipo",
  description: "Landing + Login + Dashboards (mock)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
