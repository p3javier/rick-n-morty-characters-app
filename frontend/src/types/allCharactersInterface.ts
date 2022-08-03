import { Character } from "./characterInterface";

export interface IAllCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Character[];
}
