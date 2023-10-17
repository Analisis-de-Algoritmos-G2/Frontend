import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';
import { Observable, Subscription } from 'rxjs';
import { TweetService } from '../shared/tweet.service';
@Component({
  selector: 'app-sentimientos',
  templateUrl: './sentimientos.component.html',
  styleUrls: ['./sentimientos.component.css']
})
export class SentimientosComponent {
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {};
  leftCandidateImage: string = '';
  rightCandidateImage: string = '';
  tweetTextCand2: string = 'tweet 2';
  tweetTextCand1: string = 'tweet 1';
  titleTextCand2: string = 'Candidato 2';
  titleTextCand1: string = 'Candidato 1';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private candidateService: CandidateService,
    private themeService: ThemeService,
    private tweetService: TweetService
  ) { }


  ngOnInit(): void {
    const candidatesSubscription = this.candidateService.getSelectedCandidates().subscribe(candidates => {
      this.selectedCandidates = candidates;
      if (candidates.right) {
        this.leftCandidateImage = this.getCandidateImage(candidates.right);
        this.titleTextCand2 = this.getCandidateText(candidates.right);
        const tweetSubscription = this.getTweet(candidates.right, this.selectedTheme).subscribe(
          tweet => {
            this.tweetTextCand2 = tweet;
            console.log('El tweet positivo es: ', this.tweetTextCand2);
          },
          error => {
            console.error('Hubo un error al obtener el tweet:', error);
          }
        );
        this.subscriptions.add(tweetSubscription);
      }
      if(candidates.left){
        this.rightCandidateImage = this.getCandidateImage(candidates.left);
        this.titleTextCand1 = this.getCandidateText(candidates.left);
        const tweetSubscription = this.getTweet(candidates.left, this.selectedTheme).subscribe(
          tweet => {
            this.tweetTextCand1 = tweet;
            console.log('El tweet positivo es: ', this.tweetTextCand2);
          },
          error => {
            console.error('Hubo un error al obtener el tweet:', error);
          }
        );
        this.subscriptions.add(tweetSubscription);
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

  getTweet(candidateName: string, topic: string): Observable<string> {
    // No necesitas una variable local; en su lugar, devuelve directamente el Observable.
    return this.tweetService.getTweet(candidateName, topic);
  }

  navigate() {
    console.log('url img candidato', this.leftCandidateImage)
    this.router.navigateByUrl('/sentimientos-negativos', { state: { leftCandidateImage: this.leftCandidateImage } });

  }
  ngOnDestroy(): void {
    // Asegúrate de anular todas las suscripciones cuando se destruya el componente.
    this.subscriptions.unsubscribe();
  }
}
