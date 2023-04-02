import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Dino} from "../../store/dino/dino.model";

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.scss']
})
export class DinoDetailsComponent implements OnInit {
  dinoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // @ts-ignore
    this.dinoForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        description: ["", Validators.required],
        image: ["", Validators.required, this.requiredFileType('png')]
      }
    )
  }

  onSubmit() {
    if(this.dinoForm.invalid) {
      return;
    }
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
