import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTarjetaComponent } from './pizza-tarjeta.component';

describe('PizzaTarjetaComponent', () => {
  let component: PizzaTarjetaComponent;
  let fixture: ComponentFixture<PizzaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
