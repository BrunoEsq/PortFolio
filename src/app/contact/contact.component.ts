import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showModal = false;

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_s2lxkrr', 'template_slh1pe5', e.target as HTMLFormElement, {
        publicKey: 'nqm-cCukCC6stYngA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.showModal = true; // Muestra el modal al enviar correctamente
          
          // Oculta el modal después de 3 segundos
          setTimeout(() => {
            this.showModal = false;
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
