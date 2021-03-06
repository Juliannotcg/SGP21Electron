import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        MatInputModule,
        MatDialogModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent} from './login/login-form.component';
import { LancamentoComponent,  } from './lancamento/lancamento.component';
import { LancamentoDialog } from './lancamento/lancamento.component-dialog';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './login/login-form.component.service';
import { HttpClientModule } from '@angular/common/http';
import { UppercaseDirective } from './uppercase.directive'
import { ToastrModule } from 'ngx-toastr';
import { LancamentoService } from './lancamento/lancamento.component.service';

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
      path        : 'home',
      component: HomeComponent
    },
    {
      path        : 'app-dashboard',
      component: DashboardComponent
    },
    {
        path        : '**',
        redirectTo  : 'login'
    },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LancamentoComponent,
    LancamentoDialog,
    HomeComponent,
    DashboardComponent,
    UppercaseDirective
  ],
  imports: [
    HttpClientModule,
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
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatCheckboxModule,

    FlexLayoutModule,
    ToastrModule.forRoot() 
  ],
  providers: [MatDatepickerModule, LoginService, LancamentoService],
  bootstrap: [AppComponent],
  entryComponents: [LancamentoDialog]
})
export class AppModule { }
