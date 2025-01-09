import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch01Component } from './switch01.component';

describe('Switch01Component', () => {
  let component: Switch01Component;
  let fixture: ComponentFixture<Switch01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Switch01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
