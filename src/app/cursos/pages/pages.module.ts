import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
