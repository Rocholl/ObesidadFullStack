import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AverageTablePage } from './average-table.page';

describe('AverageTablePage', () => {
  let component: AverageTablePage;
  let fixture: ComponentFixture<AverageTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AverageTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
