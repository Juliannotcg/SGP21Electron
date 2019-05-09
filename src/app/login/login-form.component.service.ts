import { UsuarioLogin } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoginService{

    onSearchTextChanged:  Subject<any> = new Subject();
    searchText: string;
    baseApi: string = 'https://localhost:44323/api/Login';
    public usuarioLogin: UsuarioLogin;

    constructor(public snackBar: MatSnackBar,
        private http: HttpClient)
    {
    }

    loginService(usuarioLogin: UsuarioLogin): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseApi, {...usuarioLogin})
                .subscribe(resolve, reject);
        });
    }
}
