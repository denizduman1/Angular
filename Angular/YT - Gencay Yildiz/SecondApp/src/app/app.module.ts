import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecapComponent } from './recap/recap.component';
import { ExampleDirective } from './directives/example.directive';
import { CardDirective } from './directives/card.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecapComponent,
    ExampleDirective,
    CardDirective,
    CustomifDirective,
    CustomforDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
