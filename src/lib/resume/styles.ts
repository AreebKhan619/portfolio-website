import { StyleSheet } from "@react-pdf/renderer";

/**
 * Every size and colour of the PDF resume. Built-in Helvetica keeps text
 * extraction clean for ATS parsers (no ligatures, no embedded-font cmaps).
 */
const color = {
  text: "#111111",
  muted: "#4a4a4a",
  rule: "#9a9a9a",
};

export const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.35,
    color: color.text,
  },
  bold: { fontFamily: "Helvetica-Bold" },
  muted: { color: color.muted },
  link: { color: color.text, textDecoration: "none" },

  name: { fontFamily: "Helvetica-Bold", fontSize: 20, lineHeight: 1.1 },
  title: { fontSize: 11, marginTop: 3 },
  contact: { fontSize: 9, color: color.muted, marginTop: 4 },

  section: { marginTop: 12 },
  heading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 0.75,
    borderBottomColor: color.rule,
  },

  entry: { marginBottom: 7 },
  entryHeader: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  entryTitle: { flex: 1 },
  entryAside: { color: color.muted, textAlign: "right" },
  entryMeta: { color: color.muted },

  bulletRow: { flexDirection: "row", marginTop: 1.5 },
  bulletMark: { width: 10 },
  bulletText: { flex: 1 },

  line: { marginBottom: 2 },
  stack: { color: color.muted, marginTop: 2 },
});
