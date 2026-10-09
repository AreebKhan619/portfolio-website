import { renderToBuffer } from "@react-pdf/renderer";
import { cacheLife } from "next/cache";

import { getResumeProfile } from "@/lib/content";
import { ResumeDocument } from "@/lib/resume/document";

/**
 * Renders the resume PDF from the profile. Cached so the route is prerendered
 * at build time and regenerated only when the content changes.
 */
export async function renderResumePdf(): Promise<{ pdf: Uint8Array<ArrayBuffer>; fileName: string }> {
  "use cache";
  cacheLife("max");
  const profile = await getResumeProfile();
  const buffer = await renderToBuffer(<ResumeDocument profile={profile} />);
  return { pdf: new Uint8Array(buffer), fileName: profile.resume.fileName };
}
