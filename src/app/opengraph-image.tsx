import { ogSize, renderSocialCard } from "@/lib/og-image";

export const alt = "Portfolio preview card";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderSocialCard();
}
