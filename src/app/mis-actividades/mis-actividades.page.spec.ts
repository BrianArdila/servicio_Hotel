import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisActividadesPage } from './mis-actividades.page';

describe('MisActividadesPage', () => {
  let component: MisActividadesPage;
  let fixture: ComponentFixture<MisActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
