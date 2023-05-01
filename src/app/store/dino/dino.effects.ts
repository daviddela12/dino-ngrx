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
    switchMap(() =>
        [
          HistoryActions.addHistoryItem({newHistoryItem: {
            description: "Dino Selected",
            dinoReference: 3
          }}),
          NotificationActions.showNotificationItem({
            notification: {
              message: "Select the dinosaur",
              type: "INFO"
            }
          })
        ],
      )
    ),{dispatch: false}
  );
  /**
  newDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.createNewDino),
      exhaustMap(({newDino}) => {
        return this.dinoService.addDino(newDino).pipe(
          switchMap((dinoResponse: Dino) =>
            [
              DinoActions.createNewDinoSuccess({newDino: dinoResponse}),
              HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Added dinosaur to your collection",
                dinoReference: dinoResponse.id
              }}),
              NotificationActions.showNotificationItem({
                notification: {
                  message: "Added dinosaur to your collection",
                  type: "INFO"
                }
              })
            ],
          ),
          catchError(error => of(error).pipe(
            switchMap((error) => {
                return [
                  NotificationActions.showNotificationItem({
                    notification: {
                      message: error,
                      type: "ERROR"
                    }
                  })
                ];
              }
            )
          ))
        )
      })
    )
  );

  updateDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.updateDino),
      exhaustMap(({updatedDino}) => {
        return this.dinoService.updateDino(updatedDino).pipe(
          exhaustMap((dinoResponse: Dino) =>
            [
              DinoActions.updateDinoSuccess({updatedDino: dinoResponse}),
              HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Updated dinosaur",
                dinoReference: dinoResponse.id
              }}),
              NotificationActions.showNotificationItem({
                notification: {
                  message: "Updated dinosaur",
                  type: "INFO"
                }
              })
            ],
          ),
          catchError(error => of(error).pipe(
            switchMap((error) => {
                return [
                  NotificationActions.showNotificationItem({
                    notification: {
                      message: error,
                      type: "ERROR"
                    }
                  })
                ];
              }
            )
          ))
        )
      })
    )
  );

  deleteDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.deleteDino),
      exhaustMap(({deletedDinoId}) => {
        return this.dinoService.deleteDino(deletedDinoId).pipe(
          exhaustMap((response: any) =>
            [
              DinoActions.deleteDinoSuccess({deletedDinoId: deletedDinoId}),
              HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Deleted dinosaur from your collection",
                dinoReference: deletedDinoId
              }}),
              NotificationActions.showNotificationItem({
                notification: {
                  message: "Deleted dinosaur from your collection",
                  type: "INFO"
                }
              })
            ],
          ),
          catchError(error => of(error).pipe(
            switchMap((error) => {
                return [
                  NotificationActions.showNotificationItem({
                    notification: {
                      message: error,
                      type: "ERROR"
                    }
                  })
                ];
              }
            )
          ))
        )
      })
    )
  );
**/


}
