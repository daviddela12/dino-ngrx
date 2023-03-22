import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ItemActions} from "./item/item.actions";
import {Item} from "./item/item.model";
import {DinoService} from "../services/dino.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: Item[] = [
    {
      name: "pepe"
    },
    {
      name: "jose"
    },
    {
      name: "raul"
    }
  ]
  dinos: any;

  constructor(private store: Store, private dinoService: DinoService) {
  }

  ngOnInit() {
    this.store.dispatch(ItemActions.loadItems());
    this.dinoService.getDinos().subscribe((response) => {
      this.dinos = response;
      this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
      console.log(this.dinos);
    })
  }
}
