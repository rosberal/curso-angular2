
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/';
/* class UserToken {}
class Permissions {
    canActivate(user: UserToken, id: string): boolean {
        return true;
    }
} */
@Injectable()
export class AlunosGuard implements CanActivateChild {
    // constructor() {}
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log(route);
        console.log(state);
        return true;
    }
}
