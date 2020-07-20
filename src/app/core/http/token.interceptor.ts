import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../authentication/authentication.service'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const credentialsKey = 'credentials';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    let token: string = null;
    if (savedCredentials) {
      const credentials = JSON.parse(savedCredentials);
      console.log("credentials",credentials['token']);
      token = credentials['token'];
    }

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
