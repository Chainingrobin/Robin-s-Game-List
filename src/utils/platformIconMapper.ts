// utils/platformIconMapper.ts

/**
 * This maps known platform slugs (from RAWG API) to image URLs.
 */
const platformSlugToIcon: Record<string, string> = {
  pc: '/assets/windows.png',         // We'll handle mac/linux separately if needed
  playstation: '/assets/playstation.png',
  xbox: '/assets/xbox.png',
  nintendo: '/assets/nintendo.png',
  mac: '/assets/mac.png',
  linux: '/assets/linux.png',
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
