"use client";

import { columns } from "../_components/columns";
import { DataTable } from "../_components/data-table";
import SidebarSheetButton from "../_components/sidebar-sheet-button";
import { useRadiosContext } from "../_hooks/use-radios-context";

export default function FavoritesPage() {
  const { radios, hasNextPage, fetchNextPage } = useRadiosContext();

  const favorites = radios.filter((radio) => radio.favorite);

  return (
    <div className="h-full w-full space-y-8 rounded-lg p-8">
      <SidebarSheetButton />
      <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-gray-500">
            Radio Browser
          </span>
          <h2 className="text-xl font-semibold text-black">Favorites</h2>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={favorites}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
}
