import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatInputModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent, LoginDialog } from './login/login-form.component';
import { LancamentoComponent } from './lancamento/lancamento.component';

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
    LoginDialog
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
  entryComponents: [LoginDialog]
})
export class AppModule { }
