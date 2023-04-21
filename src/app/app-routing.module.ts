import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DinoWrapperComponent} from "./components/dino/dino-wrapper/dino-wrapper.component";
import {DinoDetailsComponent} from "./components/dino/dino-details/dino-details.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  { path: '', redirectTo: '/dino-list', pathMatch: 'full' },
  { path: 'dino-list', component: DinoWrapperComponent},
  {
    path: 'dino-details',
    children: [
      {path: '', component: DinoDetailsComponent},
      {path: ':dinoId', component: DinoDetailsComponent}
    ]
  },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
