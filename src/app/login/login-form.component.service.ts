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
    baseApi: string = 'https://localhost:44323/api/values';
    public usuarioLogin: UsuarioLogin;

    constructor(public snackBar: MatSnackBar,
        private http: HttpClient)
    {
    }

    loginService(usuarioLogin: UsuarioLogin): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseApi, {...usuarioLogin})
            .subscribe((response: any) => 
            {  
                if (response)
                    this.snackBar
                        .open('Conectado com sucesso',
                            'Ok',
                            {
                                panelClass: ['warn'],
                                verticalPosition: 'top'
                            }).afterDismissed().subscribe(() => resolve(true), () => reject(false));
                else
                    resolve(true);
            
            }, error => 
            {
                this.snackBar
                        .open('Usuario ou senha inválido: ' +
                            error,
                            'Ok',
                            {
                                panelClass: ['warn'],
                                verticalPosition: 'top'
                            });
                reject(false);
            });
        });
    }



}
