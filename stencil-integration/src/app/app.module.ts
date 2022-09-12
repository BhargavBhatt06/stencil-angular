import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { webComponentModule } from 'src/libs/stencil-generated/web-components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    webComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
