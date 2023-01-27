import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formAdd: FormGroup;

  ApiService: any;
  
  constructor(
    private api: ApiService,
    private router: Router
    ) {
      this.formAdd= new FormGroup({
        nombre: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
        
     })
    }

  ngOnInit(): void {
  }

  postForm(form: any){
    this.api.postEstudiante(form).subscribe(data => {
      
        })
  }
 

  salir(){
    this.router.navigate(['/estudiantes/listar']);
  }


}
