import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})

export class FAQComponent {

  faqItems: FaqItem[] = [
    {
      question: '¿Qué es LinkByte?',
      answer: 'LinkByte es una plataforma diseñada para conectar a profesionales y aficionados de la tecnología, facilitando su participación en eventos, talleres y conferencias del sector. Además, permite la creación de eventos personalizados por los usuarios.',
      isOpen: false
    },
    {
      question: '¿Cómo puedo asistir a un evento en LinkByte?',
      answer: 'Para asistir a un evento, primero debes registrarte en la plataforma. Luego, podrás explorar la lista de eventos disponibles e inscribirte en aquellos que más te interesen.',
      isOpen: false
    },
    {
      question: '¿Puedo crear y organizar mi propio evento en LinkByte?',
      answer: 'Sí, en LinkByte los usuarios pueden crear y gestionar sus propios eventos tecnológicos. Solo tienes que iniciar sesión, dirigirte a la sección de "Crear Evento" y seguir las instrucciones para configurar y publicar tu evento.',
      isOpen: false
    },
    {
      question: '¿Es gratuito utilizar LinkByte?',
      answer: 'El registro y uso básico de LinkByte son gratuitos. Sin embargo, algunos eventos pueden requerir una cuota de inscripción, que será determinada por los organizadores de cada evento.',
      isOpen: false
    },
    {
      question: '¿Cómo puedo conectar con otros profesionales en LinkByte?',
      answer: 'LinkByte ofrece herramientas de networking que facilitan la conexión entre los participantes durante los eventos. Además, puedes unirte a foros de discusión y grupos temáticos dentro de la plataforma.',
      isOpen: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

}
