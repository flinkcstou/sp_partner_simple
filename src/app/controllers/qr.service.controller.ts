import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../models/requests/auth-request';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/responses/auth-response';

@Injectable({
    providedIn: 'root'
})
export class QrServiceController {
    fullUrl = environment.apiUrl + '/qr';

    constructor(private httpClient: HttpClient) {
    }

    qrPost(qrRequest: any): Observable<any> {
        //todo set request and response model
        return this.httpClient.post<AuthResponse>(this.fullUrl, qrRequest);
    }
}
