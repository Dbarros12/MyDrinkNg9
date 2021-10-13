import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: any = [];

  constructor(private loginService: LoginServiceService) {
  }

  ngOnInit() {
   // this.listarClientes();
  }

  listarClientes() {
    this.loginService.listarClientes().subscribe(data => {
      for (const d of (data as any)) {
        this.clientes.push({
          id: d.idCliente,
          cpf: d.cpfCliente,
          email : d.emailCliente,
          nome: d.nomeCliente,
          senha: d.senhaCliente,
        });
      }
      console.log('CLIENTES: ' + JSON.stringify(this.clientes));
    });



  }

}
