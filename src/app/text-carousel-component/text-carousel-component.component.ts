import { Component} from '@angular/core';

@Component({
  selector: 'app-text-carousel-component',
  templateUrl: './text-carousel-component.component.html',
  styleUrls: ['./text-carousel-component.component.css']
})
export class TextCarouselComponentComponent {

  texts = ['hola', 'mundo', 'cómo', 'estás'];
  currentIndex = 0;

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this.currentIndex < this.texts.length - 1) {
      this.currentIndex++;
    } else if (event.key === 'ArrowLeft' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
