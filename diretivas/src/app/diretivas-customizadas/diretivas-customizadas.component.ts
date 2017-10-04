import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {


mostrarCursos:boolean=false;
cursos: string[] = ['Angular2'];
  constructor() { }

  ngOnInit() {
  }



  mostrarOuEsconderCursos(){
    this.mostrarCursos = !this.mostrarCursos;
      }
}
