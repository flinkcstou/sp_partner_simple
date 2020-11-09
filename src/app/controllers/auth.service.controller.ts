import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthRequest } from '../models/requests/auth-request';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/responses/auth-response';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceController {
    fullUrl = environment.apiUrl + '/auth';

    constructor(private httpClient: HttpClient) {
    }

    login(authRequest: AuthRequest): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(this.fullUrl + '/login', {authRequest});
    }


}
