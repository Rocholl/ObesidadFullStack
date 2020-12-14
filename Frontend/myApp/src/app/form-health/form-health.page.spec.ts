import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormHealthPage } from './form-health.page';

describe('FormHealthPage', () => {
  let component: FormHealthPage;
  let fixture: ComponentFixture<FormHealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHealthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
