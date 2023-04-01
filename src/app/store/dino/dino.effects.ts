import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, switchMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {DinoActions} from "./dino.actions";
import {AlertActions} from "../../components/alert/alert.actions";
import {Dino} from "./dino.model";

@Injectable()
export class DinoEffects {
  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

  item2Effects$ = createEffect(() => this.actions$
    .pipe(
      ofType(DinoActions.loadDinos),
      exhaustMap(() => this.dinoService.getDinoCollection()),
      switchMap((dinosResponse: Dino[]) =>
        [// TODO AÑADIR UNA LLAMADA DENTRO DEL ARRAY
          //  A NOTICIACION DICIENDO QUE HA HABIDO UN CAMBIO
          DinoActions.loadDinosSuccess({dinoCollection: dinosResponse}),
          AlertActions.addAlert({newAlert: {description: "hola2"}})
        ]
      ),
      catchError((error) => EMPTY)
    )
  );

}
