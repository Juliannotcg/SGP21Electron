import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

export interface Lancamentos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'SGP21';
  lancamentoForm: FormGroup;
  selectedValue: string;
  lancamentos: Lancamentos[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.lancamentoForm = this.createLancamentoForm();
  }

  createLancamentoForm() {
    return this.formBuilder.group({
      lancamento: [this.lancamentos]
    });
  }
}
