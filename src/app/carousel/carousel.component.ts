// src/app/carousel/carousel.component.ts

import { Component, Input, HostListener } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  private audio: HTMLAudioElement;
  @Input() side: 'left' | 'right';  // Asegúrate de que 'side' es una de estas dos opciones
  @Input() currentSlideIndex: number = 0;  // Índice de la diapositiva actual
  public currentSelection: { left?: string; right?: string } = {};  // Inicialización de currentSelection

  constructor(
    private candidateService: CandidateService
  ) {
    this.side = 'left';
    this.audio = new Audio('/assets/sounds/change.mp3');
    this.candidateService.getSelectedCandidates().subscribe(selection => {
      this.currentSelection = selection;
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      this.audio.play();
    } else if (event.key === 'Enter') {
      const selectedCandidate = this.getSelectedCandidate();
      this.selectCandidate(selectedCandidate);
    }
  }

  onSlide(event: any) {
    const slideId = event.current;  // Obtén el identificador de la diapositiva, por ejemplo, "ngb-slide-1"
    this.currentSlideIndex = +slideId.split('-').pop();
    this.audio.play();
  }


  getSelectedCandidate(): string {
    const candidates = ['NONE','Galan', 'Oviedo', 'Vargas', 'Lara', 'Molano', 'Robledo', 'Bolivar',
    'NONE', 'Galan', 'Oviedo', 'Vargas', 'Lara', 'Molano', 'Robledo', 'Bolivar'];
    return candidates[this.currentSlideIndex];
  }

  selectCandidate(candidate: string) {
    const side = this.side;
    if (this.currentSelection[side] === candidate ||
        this.currentSelection.left === candidate ||
        this.currentSelection.right === candidate) {
      return;
    }

    this.candidateService.selectCandidate(side, candidate);
  }
}
