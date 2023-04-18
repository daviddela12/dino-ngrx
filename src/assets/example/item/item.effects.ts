import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemActions} from "./item.actions";
import { exhaustMap, switchMap} from "rxjs/operators";

@Injectable()
export class ItemEffects {
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

  itemEffects$ = createEffect(() => this.actions$
    .pipe(
      ofType(ItemActions.loadItems),
      exhaustMap(() => this.dinoService.getDinos()),
      switchMap(dinos =>
        [ItemActions.loadItemsSuccess({items: dinos})]
        // TODO AÑADIR UNA LLAMADA DENTRO DEL ARRAY
        //  A NOTICIACION DICIENDO QUE HA HABIDO UN CAMBIO
      )
    )
  );

}
