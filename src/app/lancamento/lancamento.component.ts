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
  lancamento: Lancamento;

  lancamentos: Lancamentos[] = [
    { value: '1', viewValue: 'Início de turno' },
    { value: '2', viewValue: 'Saída para almoço' },
    { value: '3', viewValue: 'Retorno do almoço' },
    { value: '4', viewValue: 'Fim de turno' }
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
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.nome = params['login'];
      });
  }

  inserirLancamento()
  {
    this.lancamento = new Lancamento();
    this.lancamento.Login = this.nome;
    this.lancamento.LanTipo = this.lancamentoForm.get("lancamentoSelect").value;
    this.lancamentoService.add(this.lancamento).then(
      () =>{
        this.showSuccess();
      }, 
      () =>{this.showError();}
    );
  }

  createLancamentoForm() {
    return this.form.group({
      lancamentoSelect: [this.lancamentos]
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
  
  showError() {
    this.toastr.error('O lançamento não foi registrado, corre atrás disso.', 'Ho, Jesus!',
    {timeOut: 2000});;
  }
}

