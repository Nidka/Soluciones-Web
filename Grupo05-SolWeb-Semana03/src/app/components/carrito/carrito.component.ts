import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
 items: any[] = [];
  total = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.items$.subscribe(items => {
      this.items = items;
      this.total = items.reduce((acc, item) => acc + Number(item.precio), 0);
    });
  }

  vaciarCarrito() {
    this.carritoService.vaciar();
  }
}
