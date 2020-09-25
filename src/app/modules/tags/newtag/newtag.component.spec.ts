import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtagComponent } from './newtag.component';

describe('NewtagComponent', () => {
  let component: NewtagComponent;
  let fixture: ComponentFixture<NewtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
