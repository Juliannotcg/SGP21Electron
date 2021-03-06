import { UsuarioLogin } from './../model/usuario.model';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPDF from 'jspdf';
import {Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login-form.component.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  usuarioLogin: UsuarioLogin;

  constructor(
    private toastr: ToastrService,
    public loginService: LoginService,
    private router: Router,
    public dialog: MatDialog) {}
  
  form: FormGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
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

    async login() 
    {
      this.loginService.loginService(this.form.getRawValue()).then(
        () =>
        {
          this.showSuccess();
          this.router
              .navigate(['lancamento'], 
                        {queryParams: {login: this.form.get("login").value}});
        }, 
        () =>
        {
          this.showError();
        }
      );
    }

    showSuccess() {
      this.toastr.success('Showde bola, você já pode entrar.', 'CONECTADO!',
      {timeOut: 2000});;
    }
    
    showError() {
      this.toastr.error('Usuário ou senha incorreto, corre atrás disso.', 'Ho, Jesus!',
      {timeOut: 2000});;
    }
  }

  