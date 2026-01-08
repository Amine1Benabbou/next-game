export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  genres: { id: number; name: string }[];
  platforms: {
    platform: { id: number; name: string };
  }[];
  description: string;
  metacritic: number;
}
