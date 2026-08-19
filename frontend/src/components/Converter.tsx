import { Download, Loader2, RefreshCcw } from "lucide-react";
import { useState } from "react";

import UploadZone from "./UploadZone";
import FormatSelector from "./FormatSelector"
import { convertImage } from "../services/converter";
import type { ImageFormat } from "../types/converter";

function getExtension(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (extension === "jpg") return "jpeg";

  return extension || "";
}

export default function Converter() {
  const [file, setFile] = useState<File | null>(null);

  const [format, setFormat] =
    useState<ImageFormat>("webp");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState("");

  async function handleConvert() {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setError("");
    setResult(null);
    setLoading(true);

    try {
      const from = getExtension(file);

      if (!from) {
        throw new Error("Unable to detect image format.");
      }

      if (from === format) {
        throw new Error(
          "Source and target format cannot be the same."
        );
      }

      const blob = await convertImage(
        file,
        from,
        format
      );

      setResult(blob);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    if (!result || !file) return;

    const url = URL.createObjectURL(result);

    const link = document.createElement("a");

    link.href = url;

    const originalName = file.name
      .split(".")
      .slice(0, -1)
      .join(".");

    link.download = `${originalName}.${format}`;

    link.click();

    URL.revokeObjectURL(url);
  }

  function reset() {
    setFile(null);
    setResult(null);
    setError("");
  }

  return (
    <div
      id="converter"
      className="mx-auto w-full max-w-3xl"
    >
      <div className="rounded-4xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-200/40 sm:p-8">
        {!result ? (
          <>
            <UploadZone
              file={file}
              onFileSelect={(selectedFile) => {
                setFile(selectedFile);
                setError("");
              }}
            />

            <div className="mt-6">
              <FormatSelector
                value={format}
                onChange={setFormat}
              />
            </div>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              onClick={handleConvert}
              disabled={!file || loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Converting...
                </>
              ) : (
                "Convert image →"
              )}
            </button>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
              ✓
            </div>

            <h3 className="text-2xl font-bold">
              Conversion complete
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Your {format.toUpperCase()} image is ready.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white hover:bg-zinc-800"
              >
                <Download size={19} />
                Download
              </button>

              <button
                onClick={reset}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-zinc-200 px-6 py-4 font-semibold hover:bg-zinc-50"
              >
                <RefreshCcw size={18} />
                Convert another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}