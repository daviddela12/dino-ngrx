import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Dino} from "../../../store/dino/entities/dino.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DinoDataService} from "../../../store/dino/entities-services/dino-data.service";
import {selectCurrentRoute, selectRouteParam, selectRouteParams} from "../../../store/router.selectors";

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html'
})
export class DinoDetailsComponent implements OnInit {
  dinoForm: UntypedFormGroup;
  dinoId: number;
  dino: Dino;

  constructor(private formBuilder: UntypedFormBuilder,
              private store: Store,
              private dinoDataService: DinoDataService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.dinoId = this.activateRoute.snapshot.params["dinoId"]
  }

  ngOnInit(): void {
    this.buildForm();
    if(this.dinoId) {
      this.dinoDataService.getByKey(this.dinoId)
        .subscribe((dinoResponse: Dino) => {
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
      this.dinoDataService.add(newDino)
    } else {
      newDino.image = this.dino.image;
      this.dinoDataService.update(newDino)
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
