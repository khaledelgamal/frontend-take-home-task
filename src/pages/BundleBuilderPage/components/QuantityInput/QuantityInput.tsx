export interface QuantityInputProps {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  value?: number;
  disabled?: boolean;
  enabledClassName?: string;
  disabledClassName?: string;
}

const QuantityInput = ({
  min = 0,
  max = 99,
  onChange,
  value = 1,
  disabled = false,
  enabledClassName = "bg-white text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200",
  disabledClassName = "border border-gray-300 text-gray-400 bg-white cursor-not-allowed",
}: QuantityInputProps) => {
  const isDecreaseDisabled = disabled || value <= min;
  const isIncreaseDisabled = disabled || value >= max;

  return (
    <div className="flex items-center gap-3 py-1">
      <button
        disabled={isDecreaseDisabled}
        onClick={() => onChange?.(value - 1)}
        className={`w-5 h-5 flex items-center justify-center rounded-[4px] transition-all duration-200 ${
          isDecreaseDisabled ? disabledClassName : enabledClassName
        }`}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="text-sm font-semibold text-gray-900 text-center w-3">
        {value}
      </span>
      <button
        disabled={isIncreaseDisabled}
        onClick={() => onChange?.(value + 1)}
        className={`w-5 h-5 flex items-center justify-center rounded-[4px] transition-all duration-200 ${
          isIncreaseDisabled ? disabledClassName : enabledClassName
        }`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
