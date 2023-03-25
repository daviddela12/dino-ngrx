import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Item2Actions} from "./item2.actions";
import {catchError, exhaustMap, switchMap} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";
import {error} from "@angular/compiler/src/util";
import {Item2} from "./item2.model";
import {AlertActions} from "../alert/alert.actions";

@Injectable()
export class Item2Effects {
  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

  /** PRIMERA FORMA
  itemEffects$ = createEffect(() => this.actions$
    .pipe(
      ofType(ItemActions.loadItems),
      exhaustMap(() => this.dinoService.getDinos()
        .pipe(
          map(dinos => ItemActions.loadItemsSuccess({items: dinos})),
          catchError(() => EMPTY)
        )
      )
    )
  );
   **/

  item2Effects$ = createEffect(() => this.actions$
    .pipe(
      ofType(Item2Actions.loadItems2),
      exhaustMap(() => this.dinoService.getDinos2()),
      switchMap((dinos: Item2[]) =>
        [// TODO AÑADIR UNA LLAMADA DENTRO DEL ARRAY
          //  A NOTICIACION DICIENDO QUE HA HABIDO UN CAMBIO
          Item2Actions.loadItems2Success({items: dinos}),
          AlertActions.addAlert({newAlert: {description: "hola2"}})
        ]
      ),
      catchError((error) => EMPTY)
    )
  );

}
