"use client";

import { createContext, useCallback, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { filterRadios } from "../_lib/utils";
import useLocalStorage from "../_hooks/use-local-storage";

export interface RadioDTO {
  id: string;
  name: string;
  url_resolved: string;
  favicon: string;
  country: string;
  language: string;
  tags?: string[];
  notes?: string;
  favorite: boolean;
}

export interface RadiosContextProps {
  search: string;
  setSearch: (search: string) => void;
  radios: RadioDTO[];
  isLoading: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  toggleFavorite: (radio: RadioDTO) => void;
}

export const RadiosContext = createContext<RadiosContextProps | null>(null);

export const RadiosProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const { getItem, saveItem } = useLocalStorage();

  const [favorites, setFavorites] = useState<RadioDTO[]>(
    getItem("@favorites") || []
  );

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["radios"],
      queryFn: async ({ pageParam = 0 }) => {
        const response = await fetch(
          `https://de1.api.radio-browser.info/json/stations?page=${pageParam}&limit=20`
        );
        if (!response.ok) throw new Error("Failed to fetch radios");
        const radios = await response.json();
        return radios.map((radio: any) => ({
          ...radio,
          id: radio.changeuuid,
          favorite: false,
        }));
      },
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length ? allPages.length : undefined,
    });

  const radios = data?.pages.flat() ?? [];

  const updatedRadios = radios.map((radio) => ({
    ...radio,
    favorite: favorites.some((fav) => fav.id === radio.id),
  }));

  const filteredRadios = search
    ? filterRadios(search, updatedRadios)
    : updatedRadios;

  const toggleFavorite = useCallback(
    (radio: RadioDTO) => {
      const isFavorited = favorites.some((fav) => fav.id === radio.id);
      const newFavorites = isFavorited
        ? favorites.filter((fav) => fav.id !== radio.id)
        : [...favorites, radio];

      setFavorites(newFavorites);
      saveItem("@favorites", newFavorites);
    },
    [favorites, saveItem]
  );

  return (
    <RadiosContext.Provider
      value={{
        search,
        setSearch,
        radios: filteredRadios,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage: !!hasNextPage,
        toggleFavorite,
      }}
    >
      {children}
    </RadiosContext.Provider>
  );
};
