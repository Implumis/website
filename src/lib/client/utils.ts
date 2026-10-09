export { cn } from "cn";
import { format, isValid } from "date-fns";

export function formatUTC(
  date: Date,
  formatPattern: string = "MMM d, yyyy",
): string {
  if (!date || !isValid(date)) return "N/A";
  const utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );
  return format(utcDate, formatPattern);
}

export function parseImageAlt(alt: string): {
  text: string;
  align: string;
  width: string;
  caption: string;
} {
  const parts = alt.split("|").map((s) => s.trim());
  const text = parts[0];
  let align = "center";
  let width = "";
  let caption = "";

  for (const part of parts.slice(1)) {
    if (["left", "center", "right"].includes(part)) {
      align = part;
    } else if (/^\d/.test(part)) {
      width = part;
    } else if (part) {
      caption = part;
    }
  }

  return { text, align, width, caption };
}
