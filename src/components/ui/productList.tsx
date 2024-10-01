import { Table } from "./table";

// types.ts or ProductList.types.ts (create a separate file if needed)
export interface PriceTier {
    startRange: number;
    endRange: number;
    description: string;
  }
  
  export interface Product {
    mobName: string;
    regularPrice: number;
    salePrice: number;
    link: string;
    priority: number;
    note: string;
  }
  
  export interface ProductListProps {
    priceTiers: PriceTier[];
    data: Product[];
  }
  

export function ProductList({ priceTiers, data }: ProductListProps) {
  return (
    <div className="p-5 sm:p-8 md:p-12 lg:p-20 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {priceTiers.map((tier, index) => {
        const filteredData = data.filter(
          (item) =>
            item.salePrice >= tier.startRange && item.salePrice <= tier.endRange
        );
        filteredData.sort(
          (productA, productB) => productA.priority - productB.priority
        );

        return (
          <section
            key={index}
            className="mb-8 bg-blue-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              {tier.description}
            </h2>
            {filteredData.length > 0 ? (
              <Table data={filteredData} />
            ) : (
              <p className="text-gray-500">
                No Products found in this category.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
