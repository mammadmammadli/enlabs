import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewofficeComponent } from './newoffice.component';

describe('NewofficeComponent', () => {
  let component: NewofficeComponent;
  let fixture: ComponentFixture<NewofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
