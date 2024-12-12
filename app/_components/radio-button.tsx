"use client";

import { useRef, useState } from "react";
import { RadioDTO } from "../_contexts/radios-context";
import { Button } from "./ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";

const RadioButton = ({ radio }: { radio: RadioDTO }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={radio.url_resolved} preload="none" />
      <Button
        size="sm"
        variant="secondary"
        className="text-gray-500"
        onClick={togglePlay}
      >
        {isPlaying ? <PauseIcon fill="#777" /> : <PlayIcon fill="#777" />}
      </Button>
    </>
  );
};

export default RadioButton;
