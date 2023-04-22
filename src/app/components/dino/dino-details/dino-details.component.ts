import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {DinoActions} from "../../../store/dino/dino.actions";
import {Dino} from "../../../store/dino/dino.model";
import {ActivatedRoute, Router} from "@angular/router";
import {dinoFeature} from "../../../store/dino/dino.reducers";

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html'
})
export class DinoDetailsComponent implements OnInit {
  dinoForm: FormGroup;
  dinoId: number;
  dino: Dino;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.dinoId = Number(this.route.snapshot.params['dinoId']);
    if (this.dinoId) {
      this.store.dispatch(DinoActions.getDinoById({dinoId: this.dinoId}));

      this.store.pipe(
        select(dinoFeature.selectDinoSelected)
      ).subscribe((dinoResponse: Dino) => {
          if (dinoResponse) {
            this.dino = dinoResponse;
            this.dinoForm.setValue({
              id: dinoResponse.id,
              name: dinoResponse.name,
              description: dinoResponse.description
            })
          }
      })
    }
  }

  onSubmit() {
    if (this.dinoForm.invalid) {
      return;
    }
    const newDino: Dino = {
      id: this.dinoForm.value.id,
      name: this.dinoForm.value.name,
      image: "assets/images/dinos/"+this.randomIntFromInterval(1, 5)+".png",
      description: this.dinoForm.value.description,
      date_updated: new Date()
    }
    if (!this.dinoId) {
      newDino.date_created = new Date()
      this.store.dispatch(DinoActions.createNewDino({newDino}));
    } else {
      newDino.image = this.dino.image;
      this.store.dispatch(DinoActions.updateDino({updatedDino: newDino}));
    }
    this.router.navigate(["/"]);
  }

  private buildForm() {
    this.dinoForm = this.formBuilder.group(
      {
        id: [""],
        name: ["", Validators.required],
        description: ["", Validators.required]
      }
    )
  }

  private randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
