import {EntitySelectorsFactory} from "@ngrx/data";
import {Dino} from "./entities/dino.model";

export const dinoSelectors = new EntitySelectorsFactory().create<Dino>('Dino');
