import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { StartComponent } from './start/start.component';

const ROUTES: Route[] = [
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, Tab1Component, Tab2Component, StartComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
