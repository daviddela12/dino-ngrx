import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {AppEffects, AppReducers} from "./app.state";
import { EffectsModule } from '@ngrx/effects';
import { AlertComponent } from './components/alert/alert.component';
import {Item2Module} from "./components/item2/item2.module";
import { LoadingComponent } from './components/loading/loading.component';
import { DinoCardComponent } from './components/dino-card/dino-card.component';
import {DinoModule} from "./store/dino/dino.module";
import { DinoWrapperComponent } from './components/dino-wrapper/dino-wrapper.component';
import { DinoDetailsComponent } from './components/dino-details/dino-details.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    DinoCardComponent,
    DinoWrapperComponent,
    DinoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Item2Module,
    DinoModule,
    StoreModule.forRoot(AppReducers),
    // StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(AppEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
