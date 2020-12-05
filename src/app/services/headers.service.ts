import { Injectable } from '@angular/core';
import {StorageLocalService} from './storage-local.service';
import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  headers = new HttpHeaders({
    'Authorization': environment.tokenPrefix + this.storageLocalService.getApiToken(),
  });

  constructor(private storageLocalService: StorageLocalService
  ) {
  }
}
