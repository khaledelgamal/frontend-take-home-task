export interface QuantityInputProps {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  value?: number;
}

const QuantityInput = ({
  min,
  max,
  onChange,
  value = 1,
}: QuantityInputProps) => {
  return (
    <div className="flex items-center gap-3 py-1">
      <button
        className="w-5 h-5 flex items-center justify-center rounded-[4px] bg-white text-gray-700 cursor-pointer"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="text-sm font-semibold text-gray-900 text-center">
        {value}
      </span>
      <button
        className="w-5 h-5 flex items-center justify-center rounded-[4px] bg-white text-gray-700 cursor-pointer"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
