import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPDF from 'jspdf';
import {Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  constructor(public dialog: MatDialog) {}
  
  form: FormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    submit() {
      if (this.form.valid) {
        this.submitEM.emit(this.form.value);
      }
    }
    @Input() error: string | null;
  
    @Output() submitEM = new EventEmitter();
    
    gerarPDF() {
      let documento = new jsPDF();
      documento.text("Relatório em PDF no Angular", 10, 10);
      documento.output("dataurlnewwindow");
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(LoginDialog, {
        width: '350px',
        data: {nome: this.form.get('username').value}
      });
  
      dialogRef.afterClosed().subscribe(result => {
     
      });
    }
  }

  @Component({
    selector: 'login-form.component-dialog',
    templateUrl: 'login-form.component-dialog.html',
  })
  export class LoginDialog {
    
    nome: string;

    constructor(private router: Router,
      public dialogRef: MatDialogRef<LoginDialog>,
      @Inject(MAT_DIALOG_DATA) public data) {
      }
  
    onNoClick(): void {
      if (this.nome === this.data.nome)
      {
        this.router.navigate(['lancamento']);
        this.dialogRef.close();
      }
    }
  }
  
  