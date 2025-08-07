// utils/platformIconMapper.ts

/**
 * This maps known platform slugs (from RAWG API) to image URLs.
 */
const baseUrl = import.meta.env.BASE_URL;

const platformSlugToIcon: Record<string, string> = {
  pc: `${baseUrl}assets/windows.png`,
  playstation: `${baseUrl}assets/playstation.png`,
  xbox: `${baseUrl}assets/xbox.png`,
  nintendo: `${baseUrl}assets/nintendo.png`,
  mac: `${baseUrl}assets/mac.png`,
  linux: `${baseUrl}assets/linux.png`,
};

/**
 * Given an array of parent platform slugs, return a list of icon URLs.
 */
export function mapSlugsToIcons(slugs: string[]): string[] {
  const seen = new Set<string>();
  const icons: string[] = [];

  for (const slug of slugs) {
    if (platformSlugToIcon[slug] && !seen.has(slug)) {
      seen.add(slug); // Avoid duplicates
      icons.push(platformSlugToIcon[slug]);
    }
  }

  return icons;
}
