import { Usuario } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoginService{

    baseApi: string = '';
    public usuario: Usuario[];

    constructor(private http: HttpClient)
    {
    }

    add(usuario): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this.http.post(this.baseApi + 'api/Login', {...usuario})
                .subscribe(response => {
                    
                });
        });
    }

}
