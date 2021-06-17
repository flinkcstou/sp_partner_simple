import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarketplaceServiceController {
    fullUrl = environment.apiUrl + '/mp/api/v1';

    constructor(private httpClient: HttpClient) {
    }

}
