import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LancamentoDialog } from './lancamento.component-dialog';
import { ActivatedRoute } from '@angular/router';

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
  
  nome: string;
  title = 'SGP21';
  lancamentoForm: FormGroup;
  selectedValue: string;

  lancamentos: Lancamentos[] = [
    { value: 'Inicio', viewValue: 'Início de turno' },
    { value: 'Almoco', viewValue: 'Saída para almoço' },
    { value: 'RetornoAlmoço', viewValue: 'Retorno do almoço' },
    { value: 'FimDeTurno', viewValue: 'Fim de turno' }
  ];

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private form: FormBuilder,
    private snackBar: MatSnackBar) {
    this.lancamentoForm = this.createLancamentoForm();
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
          this.nome = params['username'];
        });
}

  createLancamentoForm() {
    return this.form.group({
      lancamento: [this.lancamentos]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LancamentoDialog, {
      width: '350px',
      data: { nome: this.lancamentoForm.get('username').value }
    });
  }

}

