import { Component } from '@angular/core';
import { ThemeService } from '../shared/theme.service';  // Importa el ThemeService

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.css']
})
export class TextCarouselComponent {

  texts = ['Seguridad', 'Movilidad', 'Salud', 'Laboral', 'Educacion'];
  currentIndex = 0;

  constructor(private themeService: ThemeService) {}  // Inyecta el ThemeService

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this.currentIndex < this.texts.length - 1) {
      this.currentIndex++;
    } else if (event.key === 'ArrowLeft' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (event.key === 'Enter') {
      const selectedTheme = this.texts[this.currentIndex];
      this.themeService.selectTheme(selectedTheme);  // Llama a selectTheme en ThemeService
      console.log(`Topic selected: ${selectedTheme}`);
    }
  }
}
