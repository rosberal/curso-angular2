import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { CursosService } from './../cursos.service';
 
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  curso: any;
  inscricao: Subscription;
  constructor(
    private _route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) { 
    // console.log(this._route);
    // this.id = this._route.snapshot.params['id'];
  }
  ngOnInit() {
    this.inscricao = this._route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);
    if (this.curso == null) {
 console.log('aqui');
      this.router.navigate(['/naoEncontrado']);
    }

  });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
