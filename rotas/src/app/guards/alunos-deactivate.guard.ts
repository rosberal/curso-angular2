import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
// import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs/';
import { IFormCanDeactivate } from './form-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate <IFormCanDeactivate> {

        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('guarda de desativacao');

            // return component.podeMudarRota();
            return component.podeDesativar();
    }
}
