"use client";

import { ColumnDef } from "@tanstack/react-table";
import RadioPlayer from "./radio-player";
import FavoriteButton from "./favorite-button";
import { RadioDTO } from "../_contexts/radios-context";
import RadioButton from "./radio-button";

export const columns: ColumnDef<RadioDTO>[] = [
  {
    accessorKey: "name",
    header: "Radio",
    cell: ({ row: { original: radio } }) => <RadioPlayer radio={radio} />,
  },
  {
    accessorKey: "country",
    header: "",
    cell: "",
  },
  {
    accessorKey: "language",
    header: "",
    cell: "",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: radio } }) => (
      <div className="flex items-center gap-2">
        <RadioButton radio={radio} />
        <FavoriteButton radio={radio} />
      </div>
    ),
  },
];
