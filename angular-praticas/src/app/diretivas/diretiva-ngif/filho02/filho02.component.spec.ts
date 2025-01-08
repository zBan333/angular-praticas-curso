import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho02Component } from './filho02.component';

describe('Filho02Component', () => {
  let component: Filho02Component;
  let fixture: ComponentFixture<Filho02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filho02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filho02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
