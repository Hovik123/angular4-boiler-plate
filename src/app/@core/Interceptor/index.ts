import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {AlertService, LogoutHelper} from '../services';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private alertService: AlertService,
                private logoutHelper: LogoutHelper) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch(err => {
            const {message = 'Something went wrong'} = err.error;
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.alertService.error('Your session expired.', true);
                    this.logoutHelper.logout();
                    return Observable.throw(err);
                }
                if (err.status === 422) {
                    if (err.error && err.error.data.errors) {
                        err.error.data.errors.forEach(error => {
                            this.alertService.error(error.alert, false);
                        });
                    } else {
                        this.alertService.error(err.error.message, false);
                    }
                } else if (err.status === 400) {
                    const error = JSON.parse(err.error);
                    this.alertService.error(error.message, false);
                } else {
                    this.alertService.error(message, false);
                    return Observable.throw(err);
                }
            }
        });
    }
}
