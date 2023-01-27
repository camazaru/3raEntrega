import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LateralComponent } from './lateral/lateral.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MaterialModule } from '../shared/material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    LateralComponent,
    CabeceraComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    
    

  ], exports: [
  
    BodyComponent,
    FooterComponent,
    LateralComponent,
    CabeceraComponent


  ]
})
export class LayoutModule { }
