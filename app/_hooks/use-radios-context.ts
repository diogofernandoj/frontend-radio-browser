import { useContext } from "react";
import { RadiosContext } from "../_contexts/radios-context";

export const useRadiosContext = () => {
  const context = useContext(RadiosContext);
  if (!context) {
    throw new Error("useRadiosContext must be used within a RadiosProvider");
  }
  return context;
};
