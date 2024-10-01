import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digiहल",
  description:
    "Digiहल is a platform that will provide suggestions for laptops, smartphones, and other devices according to your requirements, Struggling to find the gadget that meets all your requirements? Have done a lot of research but still confused about what gadget to buy? Well, we have got your back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Head content here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics as a Client Component */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
