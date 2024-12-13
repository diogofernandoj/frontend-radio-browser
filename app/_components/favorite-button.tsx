"use client";

import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { RadioDTO } from "../_contexts/radios-context";
import { useRadiosContext } from "../_hooks/use-radios-context";
import { toast } from "sonner";

const FavoriteButton = ({ radio }: { radio: RadioDTO }) => {
  const { toggleFavorite } = useRadiosContext();

  const handleFavoriteClick = () => {
    toggleFavorite(radio);
    if (!radio.favorite) {
      return toast.success("Radio adicionado à sua lista de favoritos!");
    } else {
      return toast.success("Radio removido da sua lista de favoritos!");
    }
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
