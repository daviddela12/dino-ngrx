import {Component, Input, OnInit} from '@angular/core';
import {Dino} from "../../store/dino/dino.model";

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: ['./dino-card.component.scss']
})
export class DinoCardComponent implements OnInit {

  @Input() dino: Dino;

  constructor() { }

  ngOnInit(): void {}

}
