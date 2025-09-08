import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule para *ngFor
import { PromoService } from '../../promo.service';

@Component({
  selector: 'app-promos',
  standalone: true,   // si tu componente es standalone debe ir este flag
  imports: [CommonModule],
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {
  promos: any[] = [];

  constructor(private promoService: PromoService) {}

  ngOnInit() {
    this.promos = this.promoService.getPromos();
  }
}
