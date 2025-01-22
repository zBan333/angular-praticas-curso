import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: false,

  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
  usuario: {
    nome: string;
    idade: number
  } | null = null;

  usuario02: {
    nome: string,
    endereco?: {
      cidade: string,
      bairo: string,
    }
  } | null = null;

  itens: string[] | null = null;

  usuario03: {
    nome: string,
    idade: number,
  } | null = null;

  carregarUsuario(){
    this.usuario = {
      nome: 'vitor',
      idade: 28
    }
  }

  limparUsuario(){
    this.usuario = null
  }

  carregarEndereco(){
    this.usuario02 = {
      nome: 'vitor',
      endereco : {
        cidade: 'Braço do Trombudo',
        bairo: 'centro',
      }
    }
  }

  limparEndereco(){
    this.usuario02 = null;
  }

  carregarItens(){
    this.itens = ['Item 01', ' Item 02 ',' Item 03']
  }

  limparItens(){
    this.itens = null
  }

  logar(){
    this.usuario03 = {
      nome: 'vitor',
      idade: 18
    }
  }

  deslogar(){
    this.usuario03 = null
  }
}
