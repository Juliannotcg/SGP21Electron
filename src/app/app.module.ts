import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatInputModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent} from './login/login-form.component';
import { LancamentoComponent,  } from './lancamento/lancamento.component';
import { LancamentoDialog } from './lancamento/lancamento.component-dialog';

const appRoutes: Routes = [
    {
      path        : 'lancamento',
      component: LancamentoComponent
    },  
    {
        path        : 'login',
        component: LoginFormComponent
    },
    {
        path        : '**',
        redirectTo  : 'login'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LancamentoComponent,
    LancamentoDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(appRoutes),

    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LancamentoDialog]
})
export class AppModule { }
