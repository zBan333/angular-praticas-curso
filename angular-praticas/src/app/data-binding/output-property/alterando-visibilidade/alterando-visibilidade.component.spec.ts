import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterandoVisibilidadeComponent } from './alterando-visibilidade.component';

describe('AlterandoVisibilidadeComponent', () => {
  let component: AlterandoVisibilidadeComponent;
  let fixture: ComponentFixture<AlterandoVisibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterandoVisibilidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterandoVisibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
