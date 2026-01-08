import { Game } from "./game.model";

export interface SaveGame {
  id: number;
  gameInfo: Game | null;
}
