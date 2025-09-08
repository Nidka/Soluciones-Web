import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaTarjetaComponent } from '../pizza-tarjeta/pizza-tarjeta.component';
import { CarritoService } from '../../carrito.service';
@Component({
  selector: 'app-especialidades',
  imports: [CommonModule, PizzaTarjetaComponent],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css'
})
export class EspecialidadesComponent {
  especialidades = [
    { nombre: 'COMBO PIZZA BURGER MEDIANO', descripcion: 'Cheddar, BBQ o Mix con sabor que sorprende en Mediana', precio: '12.99', imagen: 'assets/promo-1.jpg' },
    { nombre: 'COMBO PIZZA BURGER GRANDE', descripcion: 'Tu nueva pizza favorita en Cheddar, BBQ o Mix y 1 bebida de 1 litro.', precio: '11.50', imagen: '/assets/promo-2.jpg' },
    { nombre: 'DÚO PIZZA BURGER GRANDE', descripcion: '2 Pizzas Burger y 1 bebida de 1 litro para disfrutar.', precio: '11.50', imagen: '/assets/promo-3.jpg' },
    { nombre: 'COMBO PIZZA BURGER FAMILIAR', descripcion: 'Pizza Burger Familiar y 1 Bebida de 1 litro para toda la mesa.', precio: '11.50', imagen: '/assets/promo-1.jpg' },
    { nombre: 'CHEESY BITES BURGER', descripcion: '¡Pizza + hamburguesa con borde de queso!', precio: '11.50', imagen: '/assets/promo-4.jpg' },
    { nombre: 'COMBO CHEESY BITES BURGER', descripcion: 'Pizza Burger Cheesy Bites, salsas, crunch y 1 bebida de 1 litro.', precio: '11.50', imagen: '/assets/promo-4.jpg' },
    { nombre: 'COMBO TRIPLE SABOR GRANDE', descripcion: '3 Pizzas Medianas y 2 bebidas de 1 litro.', precio: '11.50', imagen: '/assets/promo-5.jpg' },
    { nombre: 'DUPLA PIZZA BURGER MEDIANO', descripcion: '2 Pizzas Burger Medianas, 1 bebida de 1 litro y alitas.', precio: '11.50', imagen: '/assets/promo-6.jpg' },
  ];

constructor(private carritoService: CarritoService) {}

    onAgregar(pizza: any) {
    console.log('Pizza agregada desde hijo:', pizza);
    this.carritoService.agregarItem(pizza); // enviar al servicio del carrito
  }
}