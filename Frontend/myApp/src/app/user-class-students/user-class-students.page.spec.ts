import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserClassStudentsPage } from './user-class-students.page';

describe('UserClassStudentsPage', () => {
  let component: UserClassStudentsPage;
  let fixture: ComponentFixture<UserClassStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserClassStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserClassStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
