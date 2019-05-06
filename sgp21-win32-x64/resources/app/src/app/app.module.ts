import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login/login-form.component';
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
    LancamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(appRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
