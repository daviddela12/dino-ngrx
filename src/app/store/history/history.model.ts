import {Dino} from "../dino/dino.model";

export interface History {
  description: string;
  dinoReference?: number;
  dinoModel?: Dino;
}
