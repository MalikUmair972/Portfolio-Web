import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TurnelComponent } from './turnel/turnel.component';



@NgModule({
  declarations: [  
    HeaderComponent,
    FooterComponent,
    TurnelComponent
    ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    HeaderComponent,
    TurnelComponent
  ]
})
export class ModuleComponentModule { }
