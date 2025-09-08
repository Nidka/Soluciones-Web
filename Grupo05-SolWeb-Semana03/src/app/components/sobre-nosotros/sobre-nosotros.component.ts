import { Component } from '@angular/core';

@Component({
selector: 'app-about-us',
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {
year = new Date().getFullYear();
milestones = [
{ year: 1958, title: 'Primer horno y mucha pasión', text: 'En Wichita, Kansas, nace la idea de compartir pizza con un toque casero y auténtico.' },
{ year: 1971, title: 'Crecimiento global', text: 'La marca se expande por el mundo llevando sabores icónicos y nuevas recetas.' },
{ year: 1990, title: 'Delivery y experiencia', text: 'Impulso a la entrega a domicilio con estándares de calidad y tiempos de respuesta.' },
{ year: 2010, title: 'Innovación constante', text: 'Masa orilla rellena, combos familiares y plataformas digitales para pedir más fácil.' },
{ year: 2025, title: 'Hoy', text: 'Compromiso con ingredientes de calidad, sostenibilidad y servicio al cliente.' }
];


values = [
{ icon: '🍕', title: 'Sabor auténtico', text: 'Recetas clásicas y nuevas combinaciones para todos los gustos.' },
{ icon: '⚡', title: 'Rapidez', text: 'Procesos optimizados para que tu pizza llegue caliente y a tiempo.' },
{ icon: '🤝', title: 'Cercanía', text: 'Trato amable y servicios pensados para tu comodidad.' },
{ icon: '🌱', title: 'Responsabilidad', text: 'Prácticas sostenibles y mejora continua en cada eslabón.' }
];
}