import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-pizza-tarjeta',
  standalone: true,
  templateUrl: './pizza-tarjeta.component.html',
  styleUrls: ['./pizza-tarjeta.component.css']
})
export class PizzaTarjetaComponent {
  @Input() pizza: any;           // Recibe datos desde el padre

  @Output() add = new EventEmitter<any>(); // Envía evento al padre

  agregarAlCarrito() {
    this.add.emit(this.pizza); // Emite la pizza al padre
  }
}