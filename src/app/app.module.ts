import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ColorDirective } from './color.directive';
import { DisableDirective } from './disable.directive';
import { ButtonComponent } from './button/button.component';
import {SpinnerComponent} from "./spinner/spinner.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToggleComponent,
    ColorDirective,
    DisableDirective,
    ButtonComponent,
    SpinnerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
