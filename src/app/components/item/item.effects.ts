import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ItemActions} from "./item.actions";
import {catchError, exhaustMap, map, switchMap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

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

}
