import { Component} from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.css']
})
export class TextCarouselComponent {

  texts = ['Seguridad', 'Movilidad', 'Salud', 'Laboral', 'Educacion'];
  currentIndex = 0;

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this.currentIndex < this.texts.length - 1) {
      this.currentIndex++;
    } else if (event.key === 'ArrowLeft' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
