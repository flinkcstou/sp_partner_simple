import { Component, OnInit } from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Аналитика');

  constructor() { }

  ngOnInit() {
  }
}
