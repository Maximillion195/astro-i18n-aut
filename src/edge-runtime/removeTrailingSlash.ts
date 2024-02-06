export function removeTrailingSlash(url: string) {
  if (!url) return '';
  return url?.at(-1) === "/" ? url.slice(0, -1) : url;
}
