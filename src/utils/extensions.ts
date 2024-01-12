export function isDateInPastDay(date: Date): boolean {
  const now = new Date();
  const oneDayAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  return date > oneDayAgo;
}
