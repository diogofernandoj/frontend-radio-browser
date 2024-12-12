import { RadioDTO } from "../_contexts/radios-context";

interface RadioPlayerProps {
  radio: RadioDTO;
}

const RadioPlayer = ({ radio }: RadioPlayerProps) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={radio.favicon}
        alt={`${radio.name} logo`}
        height={40}
        width={40}
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{radio.name}</h3>
        <p className="text-xs text-gray-500">{radio.country}</p>
      </div>
    </div>
  );
};

export default RadioPlayer;
