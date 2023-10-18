
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';
import { Observable, Subscription } from 'rxjs';
import { TweetService } from '../shared/tweet.service';
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
  winner: string = 'Winner';
  loser: string = 'Loser';
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
      if (candidates.right && candidates.left) {
        this.titleText = this.getCandidateText(candidates.right);
        const tweetSubscription = this.getWinner(candidates.left, candidates.right).subscribe(
          tweet => {
            this.winner = tweet;
            console.log('El resultado es' ,this.winner);
            if (candidates.left == this.winner){
              if (candidates.right){
                this.loser = candidates.right;
                this.leftCandidateImage = this.getCandidateImage(candidates.left);
              }
            } else {
              if (candidates.left && candidates.right){
                this.loser = candidates.left;
                this.leftCandidateImage = this.getCandidateImage(candidates.right);
              }
            }
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

  getWinner(candidate_name1: string, candidate_name2: string): Observable<string> {
    return this.tweetService.getWinner(candidate_name1, candidate_name2);
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
