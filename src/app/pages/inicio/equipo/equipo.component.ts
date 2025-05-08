import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent {

  teamMembers = [
    {
      name: 'Carlos Morales Chunga',
      age: 20,
      role: 'Desarrollador',
      study: 'Ingeniería de Sistemas e IA',
      image: 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/491876693_3924918327747330_987449440952253616_n.jpg?ccb=11-4&oh=01_Q5Aa1QHugvJqAKNXPGfy557weu0gbz48ZITwYqZE2oD23Jxg5g&oe=68277B8E&_nc_sid=5e03e0&_nc_cat=109'
    },
    {
      name: 'Miguel Escobar',
      age: 19,
      role: 'Desarrollador',
      study: 'Ingeniería de Ingeniería de Sistemas e IA',
      image: 'https://static.upao.edu.pe/upload/f1/000259967.jpg'
    },
    {
      name: 'Oscar Llaure',
      age: 21,
      role: 'Desarrollador',
      study: 'Ingeniería de Ingeniería de Sistemas e IA',
      image: 'https://static.upao.edu.pe/upload/f1/000264553.jpg'
    },
    {
      name: 'Mateo Castillo',
      age: 20,
      role: 'Desarrollador',
      study: 'Ingeniería de Ingeniería de Sistemas e IA',
      image: 'https://static.upao.edu.pe/upload/f1/000258728.jpg'
    },
  ];

}
