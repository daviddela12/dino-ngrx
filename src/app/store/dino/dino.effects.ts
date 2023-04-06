import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, switchMap, tap} from "rxjs/operators";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";
import {HistoryActions} from "../history/history.actions";
import {mergeMap, of} from "rxjs";

@Injectable()
export class DinoEffects {
  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

  loadDinosEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.loadDinos),
      exhaustMap(() => {
        return this.dinoService.getDinoCollection().pipe(
          // FORMA 1
          switchMap((dinosResponse: Dino[]) =>
            [
              // Action dinos cargados correctamente
              DinoActions.loadDinosSuccess({dinoCollection: dinosResponse}),
              // Action de Añadir Alerta
              HistoryActions.addHistoryItem({newHistoryItem: {description: "Cargado listado de dinosaurios"}})
            ],
          ),
          // FORMA 2
/**          mergeMap((dinosResponse: Dino[]) => [
            DinoActions.loadDinosSuccess({dinoCollection: dinosResponse}),
            HistoryActions.addHistoryItem({newHistoryItem: {description: "Cargado listado de dinosaurios"}}),
          ]),**/
          catchError(error => of(DinoActions.loadDinosError({ error })))
        )
      }),
    )
  );

  newDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.createNewDino),
      exhaustMap(({newDino}) => {
        return this.dinoService.addDino(newDino).pipe(
          switchMap((dinoResponse: Dino) =>
            [
              DinoActions.createNewDinoSuccess({newDino: dinoResponse}),
              HistoryActions.addHistoryItem({newHistoryItem: {description: "Added dinosaur to your collection"}})
            ],
          ),
          catchError(error => of(DinoActions.loadDinosError({ error })))
        )
      })
    )
  );
}
