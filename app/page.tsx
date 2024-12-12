"use client";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { Loader2Icon } from "lucide-react";
import { useRadiosContext } from "./_hooks/use-radios-context";
import { Input } from "./_components/ui/input";

const HomePage = () => {
  const {
    radios,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    search,
    setSearch,
  } = useRadiosContext();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader2Icon className="animate-spin text-gray-300" size={50} />
      </div>
    );
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar as rádios.</div>;
  }

  return (
    <div className="h-full w-full space-y-8 rounded-lg p-8">
      <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-gray-500">
            Radio Browser
          </span>
          <h2 className="text-xl font-semibold text-black">All radios</h2>
        </div>
        <Input
          placeholder="Search radios..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-60"
        />
      </div>
      <DataTable
        columns={columns}
        data={radios}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default HomePage;
