import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MVComponent } from './mv.component';

describe('MVComponent', () => {
  let component: MVComponent;
  let fixture: ComponentFixture<MVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
