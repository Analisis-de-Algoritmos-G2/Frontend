import { Component, OnInit, OnDestroy } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';
import { ThemeService } from '../shared/theme.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-jug-izquierdo',
  templateUrl: './jug-izquierdo.component.html',
  styleUrls: ['./jug-izquierdo.component.css']
})
export class JugIzquierdoComponent implements OnInit, OnDestroy {
  wordCloudImage: any = ''; // Variable para almacenar la URL de la imagen
  selectedCandidates: { left?: string; right?: string } = {};
  leftCandidateImage: string = '';
  selectedTheme: string = ' ';
  titleText: string = 'Candidato';
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
      if (candidates.left) {
        this.leftCandidateImage = this.getCandidateImage(candidates.left);
        this.titleText = this.getCandidateText(candidates.left);
        this.loadWordCloud(candidates.left);
      }
      console.log(candidates);
    });

    this.subscriptions.add(candidatesSubscription);

    // Suscríbete al tema seleccionado.
    const themeSubscription = this.themeService.getSelectedTheme().subscribe(theme => {
      this.selectedTheme =theme ;
      console.log('temasuscrito:',theme);
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
    console.log('Selected candidates:', this.selectedCandidates, 'Selected Topic: ', this.selectedTheme); // Log selected candidates
    this.router.navigateByUrl('/jug-derecho');
  }

  // Método para cargar la nube de palabras
  loadWordCloud(candidateName: string) {
    this.imageService.getWordCloud(candidateName, this.selectedTheme).subscribe(data => {
      const blob: Blob = new Blob([data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      this.wordCloudImage = imageUrl;
      console.log('La imagen es: ', this.wordCloudImage);// Aquí se actualiza la URL de la imagen
    }, error => {
      console.error('Hubo un error al obtener la nube de palabras: ', error);
    });
  }

  ngOnDestroy(): void {
    // Asegúrate de anular todas las suscripciones cuando se destruya el componente.
    this.subscriptions.unsubscribe();
  }


}
