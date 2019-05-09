import { Lancamento } from '../model/lancamento.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class LancamentoService{

    onSearchTextChanged:  Subject<any> = new Subject();
    searchText: string;
    baseApi: string = 'https://localhost:44323/api/Lancamento';
    public lancamento: Lancamento;

    constructor(public snackBar: MatSnackBar,
        private http: HttpClient)
    {
    }

    add(lancamento: Lancamento): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseApi, {...lancamento})
                .subscribe(resolve, reject);
        });
    }
}
