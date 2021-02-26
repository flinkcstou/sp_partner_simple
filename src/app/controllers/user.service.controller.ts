import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserServiceController {
    fullUrl = environment.apiUrl + '/users/api/v1';

    constructor(private httpClient: HttpClient) {
    }

    getUserByQrAndPhone(phone: string, qr: string): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/find', {
            params: {
                phone,
                qr
            }
        })
    }

    getUserByQr(qr: string): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/find', {
            params: {
                qr
            }
        })
    }

    activateCertificateByQr(qr: string): Observable<any> {
        return this.httpClient.post<any>(this.fullUrl + '/certificate/activate', null,{
            params: {
                qr
            }
        })
    }

    // qrPost(qrRequest: any): Observable<any> {
    //     //todo set request and response model
    //     return this.httpClient.post<AuthResponse>(this.fullUrl, qrRequest);
    // }
}
