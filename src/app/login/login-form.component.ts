import { UsuarioLogin } from './../model/usuario.model';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPDF from 'jspdf';
import {Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login-form.component.service';

@Component({
  selector: 'login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  usuarioLogin: UsuarioLogin;

  constructor(
    public loginService: LoginService,
    private router: Router,
    public dialog: MatDialog) {}
  
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

    login() {

      this.usuarioLogin.login = this.form.get("username").value;
      this.usuarioLogin.senha = this.form.get("password").value;

      this.loginService.loginService(this.usuarioLogin);

      this.router.navigate(['lancamento'],
      {queryParams: {username: this.form.get("username").value}});
    }
    
  }

  