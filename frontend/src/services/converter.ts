import type { ImageFormat } from "../types/converter";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function convertImage(
  file: File,
  from: string,
  to: ImageFormat,
): Promise<Blob> {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(`${API_URL}/${from}/convert/${to}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(error?.error?.message || "Image conversion failed");
  }

  return response.blob();
}
