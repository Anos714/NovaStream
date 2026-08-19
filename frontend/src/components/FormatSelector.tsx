import type { ImageFormat } from "../types/converter";

interface FormatSelectorProps {
  value: ImageFormat;
  onChange: (format: ImageFormat) => void;
}

const formats: ImageFormat[] = ["png", "webp", "avif", "jpeg"];

export default function FormatSelector({
  value,
  onChange,
}: FormatSelectorProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-zinc-700">Convert to</p>

      <div className="grid grid-cols-4 gap-2">
        {formats.map((format) => (
          <button
            key={format}
            type="button"
            onClick={() => onChange(format)}
            className={`rounded-xl px-3 py-3 text-sm font-semibold capitalize transition ${
              value === format
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {format}
          </button>
        ))}
      </div>
    </div>
  );
}
