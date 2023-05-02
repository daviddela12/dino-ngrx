import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { switchMap, tap} from "rxjs/operators";
import {HistoryActions} from "../history/history.actions";
import {NotificationActions} from "../notification/notification.actions";
import {EntityOp, ofEntityOp, ofEntityType} from "@ngrx/data";

@Injectable()
export class DinoEffects {

  constructor(private actions$: Actions) {}

  loadDinosEffects$ = createEffect(() => this.actions$.pipe(
      ofType("[Dino] "+EntityOp.QUERY_ALL_SUCCESS),
      switchMap((action) => {
          return [
            HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Dinos loaded successfully",
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
    ofEntityType("Dino"),
    ofEntityOp([EntityOp.QUERY_BY_KEY_SUCCESS]),
    switchMap((action) =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
            description: "Dino Selected",
            dinoReference: action.payload.data.id
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
      ofEntityType("Dino"),
      ofEntityOp([EntityOp.SAVE_ADD_ONE_SUCCESS]),
      switchMap((action) =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Added dinosaur to your collection",
              dinoReference: action.payload.data.id
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
      ofEntityType("Dino"),
      ofEntityOp([EntityOp.SAVE_UPDATE_ONE_SUCCESS]),
      switchMap((action) =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Updated dinosaur",
              dinoReference: action.payload.data.id
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
      ofEntityType("Dino"),
      ofEntityOp([EntityOp.SAVE_DELETE_ONE_SUCCESS]),
      switchMap((action) =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
              description: "Deleted dinosaur from your collection",
              dinoReference: action.payload.data.id
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
