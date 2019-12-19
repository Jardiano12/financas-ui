import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


