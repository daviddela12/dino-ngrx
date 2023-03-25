import {Component, inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AlertSelectors} from "./alert.selectors";
import {Observable} from "rxjs";
import {Alert} from "./alert.model";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts$: Observable<Alert[]>= new Observable<Alert[]>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.alerts$ = this.store.pipe(select(AlertSelectors.alertsSelector))
  }

}
