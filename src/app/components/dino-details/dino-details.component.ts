import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {DinoActions} from "../../store/dino/dino.actions";
import {Dino} from "../../store/dino/dino.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {selectDinoById} from "../../store/dino/dino.selectors";
import {dinoFeature} from "../../store/dino/dino.reducers";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.scss']
})
export class DinoDetailsComponent implements OnInit {
  dinoForm: FormGroup;
  dinoId: number;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildForm();
    this.dinoId = Number(this.route.snapshot.params['dinoId']);
    if (this.dinoId) {
      this.store.dispatch(DinoActions.getDinoById({dinoId: this.dinoId}));

      this.store.pipe(
        select(dinoFeature.selectDinoSelected)
      ).subscribe((dinoResponse: Dino) => {
          if (dinoResponse) {
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
      description: this.dinoForm.value.description,
      date_updated: new Date()
    }
    if (!this.dinoId) {
      newDino.date_created = new Date()
      this.store.dispatch(DinoActions.createNewDino({newDino}));
    } else {
      this.store.dispatch(DinoActions.updateDino({updatedDino: newDino}));
    }
    // TODO show successfull message
  }

  private buildForm() {
    this.dinoForm = this.formBuilder.group(
      {
        id: [""],
        name: ["", Validators.required],
        description: ["", Validators.required],
        // image: ["", Validators.required, this.requiredFileType('png')]
      }
    )
  }

  private requiredFileType( type: string ) {
    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const extension = file.name.split('.')[1].toLowerCase();
        if ( type.toLowerCase() !== extension.toLowerCase() ) {
          return {
            requiredFileType: true
          };
        }
        return null;
      }

      return null;
    };
  }

}
