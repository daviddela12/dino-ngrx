import {Injectable} from "@angular/core";
import {DinoService} from "../../services/dino.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, exhaustMap, mergeMap, switchMap, tap} from "rxjs/operators";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";
import {HistoryActions} from "../history/history.actions";
import {of} from "rxjs";
import {NotificationActions} from "../notification/notification.actions";

@Injectable()
export class DinoEffects {

  constructor(
    private actions$: Actions,
    private dinoService: DinoService
  ) { }

  loadDinosEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.loadDinos),
      switchMap(() => {
        return this.dinoService.getDinoCollection().pipe(
          switchMap((dinosResponse: Dino[]) =>
            [
              DinoActions.loadDinosSuccess({dinoCollection: dinosResponse}),
              HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Dinos loaded successfully"
              }}),
              NotificationActions.showNotificationItem({
                notification: {
                  message: "Dinos loaded successfully",
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
      }),
    )
  );

  getDinoByIdEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.getDinoById),
      switchMap(({dinoId}) => {
        return this.dinoService.getDinoById(dinoId).pipe(
          switchMap((dinoResponse: Dino) =>
            [
              DinoActions.getDinoByIdSuccess({dinoSelected: dinoResponse}),
              HistoryActions.addHistoryItem({newHistoryItem: {
                description: "Dino Selected",
                dinoReference: dinoResponse.id
              }})
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
      }),
    )
  );

  newDinoEffects$ = createEffect(() => this.actions$.pipe(
      ofType(DinoActions.createNewDino),
      concatMap(({newDino}) => {
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
      concatMap(({updatedDino}) => {
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
          switchMap((response: any) =>
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
}
