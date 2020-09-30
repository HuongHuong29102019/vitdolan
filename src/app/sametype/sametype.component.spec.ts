import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SametypeComponent } from './sametype.component';

describe('SametypeComponent', () => {
  let component: SametypeComponent;
  let fixture: ComponentFixture<SametypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SametypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SametypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
