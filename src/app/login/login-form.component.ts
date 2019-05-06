import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import * as jsPDF from 'jspdf';

export interface Lancamentos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
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

  }
  