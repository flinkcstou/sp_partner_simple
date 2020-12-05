import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HeadersService} from '../services/headers.service';

@Injectable({
    providedIn: 'root'
})
export class UserServiceController {
    fullUrl = environment.apiUrl + '/users/api/v1';

    constructor(private httpClient: HttpClient,
                private headersService: HeadersService) {
    }

    getUserByQrAndPhone(phone: string, qr: string): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/find', {
            params: {
                phone,
                qr
            }
        })
    }

    // qrPost(qrRequest: any): Observable<any> {
    //     //todo set request and response model
    //     return this.httpClient.post<AuthResponse>(this.fullUrl, qrRequest);
    // }
}
