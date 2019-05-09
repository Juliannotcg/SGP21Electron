import { LancamentoService } from './lancamento.component.service';
import { Component, Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LancamentoDialog } from './lancamento.component-dialog';
import { ActivatedRoute } from '@angular/router';
import { Lancamento } from '../model/lancamento.model';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private toastr: ToastrService,
    public lancamentoService: LancamentoService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private form: FormBuilder,
    private snackBar: MatSnackBar) {

    this.lancamentoForm = this.createLancamentoForm();
  }

  confirmar() {
    this.inserirLancamento();
    this.openDialog();
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.nome = params['login'];
      });
  }

  inserirLancamento(){
    
    this.lancamentoService.add(this.lancamentoForm.getRawValue()).then(() => 
    {

    });

  }

  createLancamentoForm() {
    return this.form.group({
      lancamentoSelect: [this.lancamentos],
      login: this.nome
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LancamentoDialog, {
      width: '350px',
      data: { nome: this.nome }
    });
  }

  showSuccess() {
    this.toastr.success('Tudo certo meu brother, lançamento efetuado.', 'SHOW!',
    {timeOut: 2000});;
  }
}

