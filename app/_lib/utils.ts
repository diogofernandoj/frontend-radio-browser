import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RadioDTO } from "../_contexts/radios-context";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterRadios = (search: string, radios: RadioDTO[]) => {
  const words = search.toLowerCase().split(" ");
  return radios.filter((radio) => {
    const text = `
                ${radio.name}
                ${radio.country}
                ${radio.language}
            `.toLowerCase();
    return words.every((word) => text.includes(word));
  });
};
