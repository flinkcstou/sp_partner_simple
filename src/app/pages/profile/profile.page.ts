import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, NavController} from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  logout() {
    this.navController.navigateForward(['/login']);
    localStorage.clear();
  }
}
