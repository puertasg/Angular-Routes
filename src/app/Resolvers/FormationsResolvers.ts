import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class FormationsResolvers implements Resolve<any> {
    constructor() {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    'Module Angular',
                    'Module JavaScript',
                    'Module TypeScript'
                ]);
            }, 5000);
        })
    }
}