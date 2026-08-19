import { useDropzone } from "react-dropzone";
import { FileImage, UploadCloud } from "lucide-react";

interface UploadZoneProps {
  file: File | null;
  onFileSelect: (file: File) => void;
}

export default function UploadZone({ file, onFileSelect }: UploadZoneProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: false,
      maxFiles: 1,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/webp": [".webp"],
        "image/avif": [".avif"],
      },
      onDrop: (acceptedFiles) => {
        if (acceptedFiles[0]) {
          onFileSelect(acceptedFiles[0]);
        }
      },
    });

  return (
    <div
      {...getRootProps()}
      className={`
        group relative flex min-h-64 cursor-pointer flex-col
        items-center justify-center overflow-hidden rounded-[1.75rem]
        border-2 border-dashed px-6 text-center transition-all
        duration-300
        ${
          isDragReject
            ? "border-red-400 bg-red-50"
            : isDragActive
              ? "border-violet-500 bg-violet-50"
              : "border-zinc-200 bg-zinc-50/70 hover:border-violet-400 hover:bg-violet-50/40"
        }
      `}
    >
      <input {...getInputProps()} />

      <div
        className={`
          mb-5 flex h-16 w-16 items-center justify-center
          rounded-2xl transition-all duration-300
          ${
            isDragActive
              ? "scale-110 bg-violet-600 text-white"
              : "bg-white text-violet-600 shadow-sm"
          }
        `}
      >
        {file ? <FileImage size={28} /> : <UploadCloud size={28} />}
      </div>

      {file ? (
        <>
          <p className="max-w-full truncate px-4 font-semibold text-zinc-900">
            {file.name}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <p className="mt-4 text-xs font-medium text-violet-600">
            Click or drop another file to replace
          </p>
        </>
      ) : isDragActive ? (
        <>
          <p className="text-lg font-bold text-violet-700">Drop it here</p>

          <p className="mt-2 text-sm text-violet-500">
            Release your image to start
          </p>
        </>
      ) : (
        <>
          <p className="text-lg font-bold text-zinc-900">
            Drop your image here
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            or click anywhere to browse
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["JPG", "PNG", "WEBP", "AVIF"].map((format) => (
              <span
                key={format}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-semibold text-zinc-500"
              >
                {format}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-violet-200/30 blur-2xl" />
    </div>
  );
}
