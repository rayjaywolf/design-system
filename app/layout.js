import localFont from "next/font/local";
import "./globals.scss";

export const metadata = {
  title: "Atomize Design System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
