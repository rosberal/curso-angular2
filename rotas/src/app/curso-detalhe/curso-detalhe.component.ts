import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
id: string;

  constructor(private _route: ActivatedRoute) {
console.log(this._route);
    this.id = this._route.snapshot.params['id']; }
  ngOnInit() {
  }

}
