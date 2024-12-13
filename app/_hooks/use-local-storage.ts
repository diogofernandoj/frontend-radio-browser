import { useCallback } from "react";

export default function useLocalStorage() {
  const isClient = typeof window !== "undefined";

  const saveItem = useCallback(
    (key: string, value: any) => {
      if (isClient) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [isClient]
  );

  const getItem = useCallback(
    (key: string) => {
      if (isClient) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      }
      return null;
    },
    [isClient]
  );

  const removeItem = useCallback(
    (key: string) => {
      if (isClient) {
        localStorage.removeItem(key);
      }
    },
    [isClient]
  );

  return { saveItem, getItem, removeItem };
}
