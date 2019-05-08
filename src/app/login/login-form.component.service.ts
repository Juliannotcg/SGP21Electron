import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoginService{

    baseApi: string = '';


    constructor(private http: HttpClient)
    {
    }

    add(tipoDocumento): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this.http.post(this.baseApi + 'api/Login', {...tipoDocumento})
                .subscribe(response => {
                    
                });
        });
    }

}
