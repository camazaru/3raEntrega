import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    EditarComponent,
    
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    AgregarComponent,
    ListarComponent,

  ],
  
})
export class PagesModule { }
