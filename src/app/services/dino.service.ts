import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, mergeAll, mergeMap, Observable, of, take, throwError} from "rxjs";
import {Item2} from "../components/item2/item2.model";
import {catchError} from "rxjs/operators";
import {HandleErrorsService} from "./handle-errors.service";
import {Dino} from "../store/dino/dino.model";

@Injectable({
  providedIn: 'root'
})
export class DinoService {
  readonly url: string = '/assets/db/dinos.json';

  constructor(private httpClient: HttpClient, private handleErrorService: HandleErrorsService) { }

  getDinos(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      delay(1500)
    );
  }

  /** Observable mapping with the response we want to. In this case, Item2 **/
  getDinos2(): Observable<Item2[]> {
    return this.httpClient.get<Item2[]>(this.url).pipe(
      map(response => response.map(obj => ({
        name: obj.name
      }))),
      delay(1500),
      catchError(this.handleErrorService.handleError<Item2[]>('getDinos2', []))
    );
  }

  getDinoCollection(): Observable<Dino[]> {
    const randomTrue = 1; // Math.round(Math.random());
    if (randomTrue) {
      return this.httpClient.get<Dino[]>(this.url).pipe(
        map(response => response.map(obj => ({
          id: obj.id,
          name: obj.name,
          description: obj.description,
          image: obj.image
        })).slice(1, 11)),
        delay(2500)
      );
    }
    return throwError(() => new Error("Getting dinos. Try again."));
  }
}
