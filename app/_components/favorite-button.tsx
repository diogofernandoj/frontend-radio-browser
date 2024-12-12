"use client";

import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { RadioDTO } from "../_contexts/radios-context";
import { useRadiosContext } from "../_hooks/use-radios-context";

const FavoriteButton = ({ radio }: { radio: RadioDTO }) => {
  const { toggleFavorite } = useRadiosContext();

  const handleFavoriteClick = () => {
    toggleFavorite(radio);
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleFavoriteClick}>
      <HeartIcon
        fill={!!radio.favorite ? "#777" : "#fff"}
        className="text-gray-500"
      />
    </Button>
  );
};

export default FavoriteButton;
