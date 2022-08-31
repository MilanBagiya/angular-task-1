import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StatusService } from '../services/status.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private statusService: StatusService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request.clone())
            .pipe(
                tap((success: any) => {
                    if (success.Status === false) {
                        console.error(success.Message);
                    }
                }, (error: any) => {
                    if (error.status === 401 || error.status === 403) {
                        localStorage.clear();
                        this.router.navigate(['/']);
                        this.statusService.errorStatus('Something went wrong. Please try again later.');
                    } else {
                        this.statusService.errorStatus(error.error.message ? error.error.message.toString() : 'Something went wrong. Please try again later.');
                    }
                }));
    }
}

