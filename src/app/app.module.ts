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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Item2Module,
    StoreModule.forRoot(AppReducers),
    // StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(AppEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
