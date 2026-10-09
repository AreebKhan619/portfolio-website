import { renderResumePdf } from "@/lib/resume/render";

/**
 * The downloadable resume, generated from `profile.json` at build time.
 * The folder name is the public URL; keep it in sync with `RESUME_PATH`.
 */
export async function GET() {
  const { pdf, fileName } = await renderResumePdf();
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${fileName}"`,
    },
  });
}
