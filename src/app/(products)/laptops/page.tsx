import React from "react";
import { rowProps } from "@/components/ui/tableRow";
import { ProductList } from "@/components/ui/productList";
import client from '@/db';


async function getDataFromDB(): Promise<rowProps[]> {
  const laptopData = await client.laptop.findMany({ orderBy: { salePrice: 'asc' } });

  return laptopData.length > 0 ? laptopData.map(item => ({
    mobName: item.name, 
    regularPrice: item.regularPrice,
    salePrice: item.salePrice,
    link: item.link,
    priority: item.priority,
    note: item.note,
  })) : [{
    mobName: 'N/A', regularPrice: 1, salePrice: 1, link: '#', priority: 1, note: 'note'
  }];
}

async function getPriceTiers() {
  const priceTiers = await client.laptopPriceTier.findMany({ orderBy: { startRange: 'asc' } });

  return priceTiers.length === 0 ? [{
    startRange: 0, endRange: 9999999, description: 'Laptops'
  }] : priceTiers;
}

export default async function Home() {
  const data = await getDataFromDB();
  const priceTiers = await getPriceTiers();

  return (
    <div>
      <ProductList priceTiers={priceTiers} data={data} />
    </div>
  );
}
