export type ImageFormat = "jpeg" | "png" | "webp" | "avif";

export interface ConversionResult {
  blob: Blob;
  filename: string;
}
