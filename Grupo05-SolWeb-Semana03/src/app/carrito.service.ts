import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items = new BehaviorSubject<any[]>([]);
  items$ = this.items.asObservable();

  agregarItem(item: any) {
    const actual = this.items.value;
    this.items.next([...actual, item]);
  }

  vaciar() {
    this.items.next([]);
  }

  getItems() {
    return this.items.value;
  }
}
