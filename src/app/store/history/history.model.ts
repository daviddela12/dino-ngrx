import {Dino} from "../dino/entities/dino.model";

export interface History {
  description: string;
  dinoReference?: number;
  dinoModel?: Dino;
}
