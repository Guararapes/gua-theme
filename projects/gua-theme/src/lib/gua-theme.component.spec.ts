import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaThemeComponent } from './gua-theme.component'

describe('GuaThemeComponent', () => {
  let component: GuaThemeComponent;
  let fixture: ComponentFixture<GuaThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
