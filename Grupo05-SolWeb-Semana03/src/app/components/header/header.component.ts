import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuAbierto = false;
  cantidad = 0; 

  constructor(private carritoService: CarritoService) {
    this.carritoService.items$.subscribe(items => {
      this.cantidad = items.length;
    });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}
