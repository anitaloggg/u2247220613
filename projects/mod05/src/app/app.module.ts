import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LefeCycleComponent } from './lefe-cycle/lefe-cycle.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { FormsModule } from '@angular/forms';
import { InTheBoxDirective } from './in-the-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    LefeCycleComponent,
    CheckStockComponent,
    InTheBoxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
