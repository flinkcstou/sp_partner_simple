import {Component, OnInit} from '@angular/core';
import {StorageLocalService} from '../../services/storage-local.service';
import {AuthRequest} from '../../models/requests/auth-request';
import {AuthResponse} from '../../models/responses/auth-response';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],

})
export class MainPage implements OnInit {
  brand: any
  is: any = [1,2,3,4,5,6,7,8];

  constructor(private storageLocalService: StorageLocalService) { }
  ngOnInit() {
    setTimeout(this.getBrand,900);
    this.brand = this.storageLocalService.getBrand();
  }
  getBrand() {
    // this.brand = this.storageLocalService.getBrand();
  }

  search() {
    console.log('test');
  }
}
