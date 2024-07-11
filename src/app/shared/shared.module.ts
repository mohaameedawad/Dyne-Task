import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../standalone-components/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    
  ],
  exports: [
    RouterModule,
    HeaderComponent

  ]
})
export class SharedModule { }
