import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CadastrarServiceService {
  constructor(private http: HttpClient, private router: Router) {
  }

  cadastrar(usuario) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(AppConstants.baseServidor + '/clientes/cadastrar-cliente', JSON.parse(JSON.stringify(usuario))).subscribe(data => {
    }, response => {

      if (response.status === 200) {
        this.router.navigate(['home']);
      } else {
        return response.status;
      }
    });
  }
}
