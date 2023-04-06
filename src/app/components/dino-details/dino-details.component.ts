import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DinoActions} from "../../store/dino/dino.actions";
import {Dino} from "../../store/dino/dino.model";

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.scss']
})
export class DinoDetailsComponent implements OnInit {
  dinoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.dinoForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        description: ["", Validators.required],
        // image: ["", Validators.required, this.requiredFileType('png')]
      }
    )
  }

  onSubmit() {
    if(this.dinoForm.invalid) {
      return;
    }
    const newDino: Dino = {
      id: Math.random(),
      name: this.dinoForm.value.name,
      description: this.dinoForm.value.description
    }
    this.store.dispatch(DinoActions.createNewDino({newDino}));
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
