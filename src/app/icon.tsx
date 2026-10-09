import { monogram } from "@/lib/monogram";

/** Tab icon plus the manifest's Android sizes, all from one monogram. */
export function generateImageMetadata() {
  return [32, 192, 512].map((px) => ({
    id: String(px),
    size: { width: px, height: px },
    contentType: "image/png",
  }));
}

export default async function Icon({ id }: { id: Promise<string | number> }) {
  return monogram(Number(await id), { rounded: true });
}
