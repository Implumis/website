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
