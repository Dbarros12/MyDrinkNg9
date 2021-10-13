import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  intercept(req: import('@angular/common/http').HttpRequest<any>, next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {

      const token = localStorage.getItem('token');

      if (token) {
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });

      console.log('Token added to HTTP request' + JSON.stringify(tokenRequest) );
      return next.handle(tokenRequest);
    } else {
        console.log('No token added to HTTP request');
        return next.handle(req);
    }

  }

  constructor() { }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})

export class HttpInterceptorModule {

}
