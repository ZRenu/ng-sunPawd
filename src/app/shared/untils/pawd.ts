export function unique(arr: Iterable<unknown>) {
  return Array.from(new Set(arr));
}
