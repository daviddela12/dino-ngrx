import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, mergeMap, Observable, of} from "rxjs";
import {Item2} from "../components/item2/item2.model";
import {catchError} from "rxjs/operators";
import {HandleErrorsService} from "./handle-errors.service";

@Injectable({
  providedIn: 'root'
})
export class DinoService {
  url: string = '/assets/db/dinos.json';

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
}
