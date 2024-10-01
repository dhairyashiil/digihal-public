import React from "react";
import AboutUs from "@/components/ui/aboutUs";
import HomeBanner from "@/components/ui/homeBanner";
import Navbar from "@/components/ui/navbar";
import BestDeals from "@/components/ui/bestDealCard";
import Footer from "@/components/ui/footer";


export default async function Home() {
  return (
    <div>
      <Navbar showProductLinks={false} />
      <HomeBanner />
      <BestDeals/>
      <AboutUs />
      <Footer/>
    </div>
  );
}
