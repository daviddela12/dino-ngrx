import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { exhaustMap, switchMap} from "rxjs/operators";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";
import {HistoryActions} from "../history/history.actions";

@Injectable()
export class DinoEffects {
  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

  item2Effects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.loadDinos),
      exhaustMap(() => this.dinoService.getDinoCollection()),
      switchMap((dinosResponse: Dino[]) =>
        [
          // Action dinos cargados correctamente
          DinoActions.loadDinosSuccess({dinoCollection: dinosResponse}),
          // Action de Añadir Alerta
          HistoryActions.addHistoryItem({newHistoryItem: {description: "Listado de dinosaurios cargada correctamente"}})
        ],
      )
    )
  );

}
