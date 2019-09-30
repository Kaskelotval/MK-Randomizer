import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RandomizerComponent } from "./randomizer/randomizer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  declarations: [AppComponent, RandomizerComponent, FilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
