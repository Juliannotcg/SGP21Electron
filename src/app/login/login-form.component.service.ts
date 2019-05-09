import { UsuarioLogin } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoginService implements Resolve<any>{

    onSearchTextChanged:  Subject<any> = new Subject();
    searchText: string;
    baseApi: string = 'https://localhost:44323/api/values';
    public usuarioLogin: UsuarioLogin;

    constructor(public snackBar: MatSnackBar,
        private http: HttpClient)
    {
    }



    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
            ]).then(() =>
            {
                this.onSearchTextChanged.subscribe(searchText =>
                {
                  
                });

                resolve();
            }, reject);

        });
    }

    loginService(usuarioLogin): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseApi, {...usuarioLogin})
                .subscribe(response => {
                    this.openSnackBar(response);
                    resolve(response);
                });
        });
    }

    openSnackBar(response: any)
    {
        this.snackBar.open(response.message, null,
        {
            duration: 3000,
        });
    }

}
