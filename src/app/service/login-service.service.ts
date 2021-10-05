import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient, private router: Router) {
  }

  clientes: any = [];

  login(usuario) {
    this.router.navigate(['home']);
  }

  cadastrar(usuario) {
  return this.http.post(AppConstants.baseLogin + '/cadastrar-cliente', JSON.parse(JSON.stringify(usuario))).subscribe(data => {
  }, response => {

     if (response.status === 200) {
       this.router.navigate(['home']);
     } else {
       return response.status;
     }
  });
  }

  listarClientes(): Observable<any> {
    return this.http.get(AppConstants.baseLogin + '/buscar-clientes');
  }
}
