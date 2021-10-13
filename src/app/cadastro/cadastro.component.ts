import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';
import {CadastrarServiceService} from '../service/cadastrar-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario = {
    cpfCliente: '',
    emailCliente : '',
    nomeCliente: '',
    senhaCliente: '',
  };

  constructor(private cadastrarService: CadastrarServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  cadastrar() {
    console.log('Cliente: ' + JSON.stringify(this.usuario));
    this.cadastrarService.cadastrar(this.usuario);
  }

}
