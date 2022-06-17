import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyLibraryComponent } from './my-library.component';



@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
    AppRoutingModule
  ],
  // exports: [
  //   MyLibraryComponent
  // ]
})
export class MyLibraryModule { }
