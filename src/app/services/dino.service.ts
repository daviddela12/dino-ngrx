import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

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
}
