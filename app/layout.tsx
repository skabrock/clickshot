import "./globals.css";
// import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

// const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClickShot",
  description: "ClickShot - great app for pro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
