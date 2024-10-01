import React from "react";
import { rowProps } from "@/components/ui/tableRow";
import { ProductList } from "@/components/ui/productList";
import client from '@/db';


async function getDataFromDB(): Promise<rowProps[]> {
  const tabletData = await client.tablet.findMany({ orderBy: { salePrice: 'asc' } });

  return tabletData.length > 0 ? tabletData.map(item => ({
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
  const priceTiers = await client.tabletPriceTier.findMany({ orderBy: { startRange: 'asc' } });

  return priceTiers.length === 0 ? [{
    startRange: 0, endRange: 9999999, description: 'Tablets'
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
