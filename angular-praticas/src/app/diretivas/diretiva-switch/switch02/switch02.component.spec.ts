import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch02Component } from './switch02.component';

describe('Switch02Component', () => {
  let component: Switch02Component;
  let fixture: ComponentFixture<Switch02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Switch02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
