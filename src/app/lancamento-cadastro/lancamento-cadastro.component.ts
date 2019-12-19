import { Component, OnInit } from '@angular/core';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {
  brLocal: any;

  constructor(
    appModule: AppModule
  ) {
    appModule.calendario();
    this.brLocal = appModule.br;
  }




}
