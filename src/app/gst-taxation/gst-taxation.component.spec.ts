import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTTaxationComponent } from './gst-taxation.component';

describe('GSTTaxationComponent', () => {
  let component: GSTTaxationComponent;
  let fixture: ComponentFixture<GSTTaxationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTTaxationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTTaxationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
