import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import {Router } from '@angular/router';


@Component({
    selector: 'lancamento.component-dialog',
    templateUrl: 'lancamento.component-dialog.html',
  })
  export class LancamentoDialog {
    
    nome: string;

    constructor(private router: Router,
      public dialogRef: MatDialogRef<LancamentoDialog>,
      @Inject(MAT_DIALOG_DATA) public data) {
      }
  
    onNoClick(): void {
      if (this.nome === this.data.nome)
      {
        this.router.navigate(['app-dashboard']);
        this.dialogRef.close();
      }
    }
  }