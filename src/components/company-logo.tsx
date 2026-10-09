import Image from "next/image";

import type { WorkExperience } from "@/types/profile";

/** Square company logo on a white tile, so transparent logos read in both themes. */
export function CompanyLogo({
  logo,
  className = "size-11 sm:size-12",
}: {
  logo: NonNullable<WorkExperience["logo"]>;
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line ${className}`}
    >
      <Image
        src={logo.src}
        alt=""
        width={96}
        height={96}
        sizes="48px"
        className={`size-full ${logo.inset ? "object-contain p-1.5" : "object-cover"}`}
      />
    </span>
  );
}
