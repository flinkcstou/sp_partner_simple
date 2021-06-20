import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketplaceInfoPage } from './marketplace-info.page';

describe('MarketplaceInfoPage', () => {
  let component: MarketplaceInfoPage;
  let fixture: ComponentFixture<MarketplaceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketplaceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
