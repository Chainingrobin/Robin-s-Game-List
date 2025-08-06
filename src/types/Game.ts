export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  platforms: { platform: { name: string } }[];
  genres: { name: string }[];
}
