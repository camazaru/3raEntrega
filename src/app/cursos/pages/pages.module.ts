import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
