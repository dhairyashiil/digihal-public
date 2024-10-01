import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../GoogleAnalytics";
import Footer from "@/components/ui/footer";
import LastUpdated from "@/components/ui/lastUpdated";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digiहल - Sale 2024",
  description: "Digiहल - Sale 2024 is a platform that will provide you offers from Flipkart and Amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar showProductLinks={true} />
        <GoogleAnalytics />
        <LastUpdated />
        {children}
        <Footer />
    </>
  );
}
