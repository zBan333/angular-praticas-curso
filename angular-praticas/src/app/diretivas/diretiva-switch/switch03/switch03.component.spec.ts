import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch03Component } from './switch03.component';

describe('Switch03Component', () => {
  let component: Switch03Component;
  let fixture: ComponentFixture<Switch03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Switch03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
