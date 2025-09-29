import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function remainingDays(fromDateStr: string, toDateStr: string) {
  const fromDate = new Date(fromDateStr);
  const toDate = new Date(toDateStr);

  // Calculate difference in milliseconds
  const diffMs = toDate.getTime() - fromDate.getTime();

  // Convert milliseconds to days
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  return diffDays;
}
