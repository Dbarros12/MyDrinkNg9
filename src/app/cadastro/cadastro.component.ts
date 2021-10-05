import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';

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

  constructor(private loginService: LoginServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  login() {
    this.loginService.cadastrar(this.usuario);
  }

}
