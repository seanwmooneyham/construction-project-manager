
import {
    HTTP_INTERCEPTORS, HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {StateService} from "@uirouter/angular";


// Suppresses browser native login javascript prompt

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    constructor(private stateService: StateService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        console.log(xhr);
        return next.handle(xhr).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // TODO
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if(err.status === 401) {
                        this.stateService.go('login');
                    }
                }
            })
        );
    }
}

export const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }];