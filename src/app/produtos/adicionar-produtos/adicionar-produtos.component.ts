import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent implements OnInit {
  produto = {
    nomeProduto: '',
    categoriaProduto: '',
    precoProduto: '',
    descricaoProduto: '',
    isAvaliable: ''

  };
  constructor() { }

  adicionarProduto() {
    console.log('Produto: ' + JSON.stringify(this.produto));
  }

  ngOnInit() {
  }

}
