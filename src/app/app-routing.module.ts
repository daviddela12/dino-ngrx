import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DinoWrapperComponent} from "./components/dino-wrapper/dino-wrapper.component";
import {DinoDetailsComponent} from "./components/dino-details/dino-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/dino-list', pathMatch: 'full' },
  { path: 'dino-list', component: DinoWrapperComponent},
  { path: 'dino-details', component: DinoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
