/** Format a YYYY-MM or YYYY-MM-DD value as a month-and-year label. */
export function formatMonthYear(isoDate: string) {
  const monthStamp = isoDate.length >= 7 ? `${isoDate.slice(0, 7)}-01` : isoDate;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${monthStamp}T00:00:00Z`));
}

export function monthDateTime(isoDate: string) {
  return isoDate.slice(0, 7);
}
