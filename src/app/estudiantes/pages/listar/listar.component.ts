import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  estudiantesList: any[] | undefined;

  constructor( private api: ApiService, private router:Router) {
   }

  ngOnInit(): void {
   
this.api.getAllcients().subscribe( data => {

  this.estudiantesList=data
})



}

nuevoEstudiante(){
  this.router.navigate(['/estudiantes/agregar'])
}


editarEstudiante(id:any){
  this.router.navigate(['/estudiantes/editar',id])
}

}
