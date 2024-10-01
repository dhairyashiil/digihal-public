export function Header() {
    return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {/* Mobile header */}
          <th className="md:hidden px-6 py-3 text-sm">Smartphones</th>
          <th className="md:hidden px-6 py-3 text-xm">Price with Bank Discount</th>
          <th className="hidden md:table-cell px-8 py-3">Smartphones</th>
          <th className="hidden md:table-cell px-8 py-3">Editor&#39;s Note</th>
          <th className="hidden md:table-cell px-6 py-3">Regular Price</th>
          <th className="hidden md:table-cell px-6 py-3">Price with Bank Discount</th>
          <th className="hidden md:table-cell px-6 py-3">Best Buy Link</th>
        </tr>
      </thead>
    );
  }
  