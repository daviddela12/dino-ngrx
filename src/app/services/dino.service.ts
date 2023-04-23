import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, throwError} from "rxjs";
import {Dino} from "../store/dino/dino.model";

@Injectable({
  providedIn: 'root'
})
export class DinoService {
  readonly url: string = 'http://localhost:3000/dinoCollection';
  private readonly delayLow = 500;
  private readonly delayMid = 1500;
  private readonly delayHig = 2500;

  constructor(private httpClient: HttpClient) { }

  getDinoCollection(): Observable<Dino[]> {
    const randomTrue = Math.round(Math.random());
    if (randomTrue) {
      return this.httpClient.get<Dino[]>(this.url).pipe(
        map(response => response.map(obj => ({
          id: obj.id,
          name: obj.name,
          description: obj.description,
          image: obj.image,
          date_created: obj.date_created,
          date_updated: obj.date_updated
        }))), //.slice(1, 11)),
        map(response => response.sort(this.sortFn)),
        delay(this.delayMid)
      );
    }
    return throwError(() => new Error("Getting dinos. Try again."));
  }

  getDinoById(dinoId: number): Observable<Dino> {
    return this.httpClient.get<Dino>(this.url+'/'+dinoId).pipe(delay(this.delayMid));
  }

  addDino(newDino: Dino): Observable<Dino> {
    return this.httpClient.post<Dino>(this.url, newDino).pipe(delay(this.delayMid));
  }

  updateDino(updatedDino: Dino): Observable<Dino> {
    return this.httpClient.put<Dino>(this.url+'/'+updatedDino.id, updatedDino).pipe(delay(this.delayMid));
  }

  deleteDino(deleteDinoId: number): Observable<any> {
    return this.httpClient.delete(this.url+'/'+deleteDinoId).pipe(delay(this.delayMid));
  }

  sortFn = (a: Dino, b: Dino) => new Date(b.date_updated).getTime() - new Date(a.date_updated).getTime();
}
