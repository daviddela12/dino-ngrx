import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { LoadingComponent } from './components/loading/loading.component';
import { DinoCardComponent } from './components/dino/dino-wrapper/dino-card/dino-card.component';
import { DinoWrapperComponent } from './components/dino/dino-wrapper/dino-wrapper.component';
import { DinoDetailsComponent } from './components/dino/dino-details/dino-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HistoryComponent } from './components/history/history.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';
import {NotificationModule} from "./components/notification/notification.module";
import {HistoryModule} from "./components/history/history.module";
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import {DinoEffects} from "./store/dino/dino.effects";
import {NgrxStoreIdbModule} from "ngrx-store-idb";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  // Default url for services are /api
  root: 'http://localhost:3000',
  getDelay: 1000
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    DinoCardComponent,
    DinoWrapperComponent,
    DinoDetailsComponent,
    HistoryComponent,
    NotificationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HistoryModule,
    NotificationModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([DinoEffects]),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
    NgrxStoreIdbModule.forRoot()
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
