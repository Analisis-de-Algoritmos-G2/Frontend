
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-ganador',
  templateUrl: './ganador.component.html',
  styleUrls: ['./ganador.component.css']
})
export class GanadorComponent {
  
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {};
  leftCandidateImage: string = '';
  titleText: string = 'Candidato 2';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private candidateService: CandidateService,
    private themeService: ThemeService
  ) { }


  ngOnInit(): void {
    const candidatesSubscription = this.candidateService.getSelectedCandidates().subscribe(candidates => {
      this.selectedCandidates = candidates;
      if (candidates.right) {
        this.leftCandidateImage = this.getCandidateImage(candidates.right);
        this.titleText = this.getCandidateText(candidates.right);
      }
      console.log(candidates);
    });

    this.subscriptions.add(candidatesSubscription);

    // Suscríbete al tema seleccionado.
    const themeSubscription = this.themeService.getSelectedTheme().subscribe(theme => {
      this.selectedTheme = theme;
      console.log(theme);
    });

    this.subscriptions.add(themeSubscription);
  }

  getCandidateImage(candidate: string): string {
    const images: { [key: string]: string } = {
      'Galan': '/assets/images/galan.png',
      'Oviedo': '/assets/images/oviedo.png',
      'Bolivar': '/assets/images/bolivar.png',
      'Lara': '/assets/images/lara.png',
      'Molano': '/assets/images/molano.png',
      'Robledo': '/assets/images/robledo.png',
      'Vargas': '/assets/images/vargas.png',
    };

    console.log('La imagen es; ', images[candidate])
    return images[candidate];
  }

  getCandidateText(candidate: string): string {
    // Define 'images' como un objeto que puede ser indexado con claves de tipo 'string'.
    const text: { [key: string]: string } = {
      'Galan': 'Carlos Fernando Galan',
      'Oviedo': 'Juan Daniel Oviedo',
      'Bolivar': 'Gustavo Bolivar',
      'Lara': 'Rodrigo Lara',
      'Molano': 'Diego Molano',
      'Robledo': 'Jorge Enrique Robledo',
      'Vargas': 'Jorge Luis Vargas',
    };

    console.log('El text es: ', text[candidate])
    return text[candidate]; // devuelve una imagen predeterminada o manténla vacía si el candidato no existe
  }

  navigate() {
    console.log('url img candidato', this.leftCandidateImage)
    this.router.navigateByUrl('/home');
  }
  ngOnDestroy(): void {
    // Asegúrate de anular todas las suscripciones cuando se destruya el componente.
    this.subscriptions.unsubscribe();
  }
}
