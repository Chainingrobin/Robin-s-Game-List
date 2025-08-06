export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number; 
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
  genres: {
    id: number;
    name: string;
  }[];
}
