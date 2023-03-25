import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {Item2} from "../components/item2/item2.model";

@Injectable({
  providedIn: 'root'
})
export class DinoService {
  url: string = '/assets/db/dinos.json';

  constructor(private httpClient: HttpClient) { }

  getDinos(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      delay(1500)
    );
  }

  /** Observable mapping with the response we want to. In this case, Item2 **/
  getDinos2(): Observable<Item2[]> {
    return this.httpClient.get<Item2[]>(this.url).pipe(
      map(response => response.map(obj => {
        // return new Item2(obj.name);
        const value: Item2 = {
          name: obj.name,
        }
        return value;
      })),
      delay(1500)
    );
  }
}
