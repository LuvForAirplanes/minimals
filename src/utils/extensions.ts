export function isDateInPastDay(date: Date): boolean {
  const now = new Date();
  const oneDayAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  return date > oneDayAgo;
}

export async function getFileFromUrl(url: string, name: string, type: string): Promise<File> {
  const response = await fetch(url);
  const data = await response.blob();
  const option = new File([data], name, { type });
  return option;
}
