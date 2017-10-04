import { Injectable,EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

emitirCursoCriado=new EventEmitter<string>();
static criouNovoCurso=new EventEmitter<string>();

    private _cursos: string[]=['Angular2', 'java', 'ionic'];

constructor(private _logService:LogService){
 console.log('Construtor Classe CursosService');


}


getCursos(){
this._logService.consoleLog('Obtendo lista de cursos');
  return this._cursos;
}

addCurso(curso:string)
{
  this._logService.consoleLog(`criando um novo curso ${curso}`);
  this._cursos.push(curso);
this.emitirCursoCriado.emit(curso);
CursosService.criouNovoCurso.emit(curso);

}



}



