
import { Component, OnInit } from '@angular/core';
import { CursosService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
//cursosService:CursosService;
cursos: string[]=[];

  constructor(private _cursosService:CursosService) {
//this.cursosService=_cursosService;
   }

  ngOnInit() {
this.cursos=this._cursosService.getCursos();


  }

}
