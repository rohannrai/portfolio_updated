export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}
