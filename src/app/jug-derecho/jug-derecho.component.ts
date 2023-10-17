import { Component, OnInit, OnDestroy } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';
import { ThemeService } from '../shared/theme.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-jug-derecho',
  templateUrl: './jug-derecho.component.html',
  styleUrls: ['./jug-derecho.component.css']
})
export class JugDerechoComponent implements OnInit, OnDestroy{
  wordCloudImage: any = '';
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {};
  leftCandidateImage: string = '';
  titleText: string = 'Candidato 2';
  showLoader: boolean = true;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private candidateService: CandidateService,
    private themeService: ThemeService,
    private imageService: ImageService
  ) { }


  ngOnInit(): void {
    const candidatesSubscription = this.candidateService.getSelectedCandidates().subscribe(candidates => {
      this.selectedCandidates = candidates;
      if (candidates.right) {
        this.leftCandidateImage = this.getCandidateImage(candidates.right);
        this.titleText = this.getCandidateText(candidates.right);
        this.loadWordCloud(candidates.right);
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
    console.log('Selected candidates:', this.selectedCandidates, 'Selected Topic: ', this.selectedTheme); // Log selected candidates
    this.router.navigateByUrl('/sentimientos');
  }

  // Método para cargar la nube de palabras
  loadWordCloud(candidateName: string) {
    this.imageService.getWordCloud(candidateName, this.selectedTheme).subscribe(data => {
      const blob: Blob = new Blob([data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      this.wordCloudImage = imageUrl;
    }, error => {
      console.error('Hubo un error al obtener la nube de palabras: ', error);
    });
  }

  ngOnDestroy(): void {
    // Asegúrate de anular todas las suscripciones cuando se destruya el componente.
    this.subscriptions.unsubscribe();
  }
}
