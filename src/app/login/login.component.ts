import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    emailCliente : '',
    senhaCliente: '',
  };

  constructor(private loginService: LoginServiceService, private router: Router) {
  }


  ngOnInit() {
  }

  redirectToCadastro() {
    this.router.navigate(['cadastro']);
  }

  login() {
    this.loginService.login(this.usuario);
  }

}
