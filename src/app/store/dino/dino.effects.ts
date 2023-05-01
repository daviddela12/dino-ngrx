import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { switchMap, tap} from "rxjs/operators";
import {HistoryActions} from "../history/history.actions";
import {NotificationActions} from "../notification/notification.actions";
import {EntityAction, EntityOp, ofEntityOp, ofEntityType} from "@ngrx/data";
import {Observable} from "rxjs";

@Injectable()
export class DinoEffects {

  constructor(private actions$: Actions) {}

loadDinosEffects$ = createEffect(() => this.actions$.pipe(
    ofType("[Dino] "+EntityOp.QUERY_ALL_SUCCESS),
    // ofEntityOp([EntityOp.QUERY_ALL_SUCCESS]),
    // ofEntityType("Dino"),
    switchMap(() => {
        return [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Dinos loaded successfully"
          }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Dinos loaded successfully",
              type: "INFO"
            }
          })
        ];
      },
    ),
));

  loadDinosErrorEffects$ = createEffect(() => this.actions$.pipe(
    ofType("[Dino] "+EntityOp.QUERY_ALL_ERROR, "[Dino] "+EntityOp.QUERY_LOAD_ERROR),
    switchMap((error) => {
        return [
          NotificationActions.showNotificationItem({
            notification: {
              message: error.type,
              type: "ERROR"
            }
          }),
        ];
      },
    ),
  ));

  getDinoByIdEffects$ = createEffect(() => this.actions$.pipe(
    ofType("[Dino] "+EntityOp.QUERY_BY_KEY_SUCCESS),
    // ofEntityType("Dino"),
    // ofEntityOp([EntityOp.QUERY_BY_KEY_SUCCESS]),
    switchMap(() =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
            description: "Dino Selected",
          }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Select the dinosaur",
              type: "INFO"
            }
          })
        ],
      )
    ),
  );

  newDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType("[Dino] "+EntityOp.SAVE_ADD_ONE_SUCCESS),
      // ofEntityType("Dino"),
      // ofEntityOp([EntityOp.QUERY_BY_KEY_SUCCESS]),
      switchMap(() =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Added dinosaur to your collection",
            }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Added dinosaur to your collection",
              type: "INFO"
            }
          })
        ],
      )
    ),
  );

  updateDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType("[Dino] "+EntityOp.SAVE_UPDATE_ONE_SUCCESS),
      // ofEntityType("Dino"),
      // ofEntityOp([EntityOp.QUERY_BY_KEY_SUCCESS]),
      switchMap(() =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Updated dinosaur",
            }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Updated dinosaur",
              type: "INFO"
            }
          })
        ],
      )
    ),
  );

  deleteDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType("[Dino] "+EntityOp.SAVE_DELETE_ONE_SUCCESS),
      // ofEntityType("Dino"),
      // ofEntityOp([EntityOp.QUERY_BY_KEY_SUCCESS]),
      switchMap(() =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Deleted dinosaur from your collection",
            }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Deleted dinosaur from your collection",
              type: "INFO"
            }
          })
        ],
      )
    ),
  );
}
