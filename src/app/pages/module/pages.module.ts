import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent
  ]
})
export class ModuleModule { }
