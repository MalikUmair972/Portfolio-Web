import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CoreFeatureComponent } from './core-feature/core-feature.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    CoreFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent,
    CoreFeatureComponent
  ]
})
export class ModuleModule { }
