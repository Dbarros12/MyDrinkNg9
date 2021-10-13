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

  login(usuario) {
   console.log(JSON.stringify(usuario));

   return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe( data => {

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem('token', token);

      console.info('Token: ' + localStorage.getItem('token'));

     this.router.navigate(['home']);

    });
  }

  //    this.router.navigate(['home']);

  listarClientes(): Observable<any> {
    return this.http.get(AppConstants.baseLogin + '/buscar-clientes');
  }
}
