import { Component, OnInit } from '@angular/core';
import { CamelCasePipe } from '../camel-case.pipe';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a/co/glgjpRP'
  };
  livros: string[] = ['Java', 'Angular 2'];
  filtro: string;
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincrono'), 2000);
  });

  valorAsync2 = Observable.interval(2000).
  map(valor => 'ValorAssincrono2');




  constructor() {}


  ngOnInit() {}

  addCurso(valor) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter(v => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
