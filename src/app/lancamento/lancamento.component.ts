import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

export interface Lancamentos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.scss']
})

export class LancamentoComponent {
  title = 'SGP21';
  lancamentoForm: FormGroup;
  selectedValue: string;
  lancamentos: Lancamentos[] = [
    { value: 'Inicio', viewValue: 'Início de turno' },
    { value: 'Almoco', viewValue: 'Saída para almoço' },
    { value: 'RetornoAlmoço', viewValue: 'Retorno do almoço' },
    { value: 'FimDeTurno', viewValue: 'Fim de turno' }
  ];

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {
    this.lancamentoForm = this.createLancamentoForm();
  }

  createLancamentoForm() {
    return this.formBuilder.group({
      lancamento: [this.lancamentos]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
   }
}

