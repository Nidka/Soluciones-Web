import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  getPromos() {
    return [
      { titulo: '2x1 en pizzas', descripcion: 'Lleva dos por uno', precio: 35 },
      { titulo: 'Familiar grande', descripcion: 'Pizza familiar extra grande', precio: 50 }
    ];
  }
}
