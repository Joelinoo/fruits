import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitsListComponent,
    FruitDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
