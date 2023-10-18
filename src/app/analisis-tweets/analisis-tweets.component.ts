import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';
import { Observable, Subscription } from 'rxjs';
import { TweetService } from '../shared/tweet.service';

@Component({
  selector: 'app-analisis-tweets',
  templateUrl: './analisis-tweets.component.html',
  styleUrls: ['./analisis-tweets.component.css']
})
export class AnalisisTweetsComponent {
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {};
  leftCandidateImage: string = '';
  rightCandidateImage: string = '';
  titleTextCand2: string = 'Candidato 2';
  titleTextCand1: string = 'Candidato 1';
  countData: any = null;
  tweetTextCand2: string = 'analisis 2';
  tweetTextCand1: string = 'analisis 1';
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
        const tweetSubscription = this.loadCountData(candidates.right).subscribe(
          tweet => {
            this.tweetTextCand2 = tweet;
            console.log('El analisis es: ', this.tweetTextCand2);
          },
          error => {
            console.error('Hubo un error al obtener el tweet:', error);
          }
        );
        this.subscriptions.add(tweetSubscription);
      }
      if(candidates.left){
        this.rightCandidateImage = this.getCandidateImage(candidates.left);
        const tweetSubscription = this.loadCountData(candidates.left).subscribe(
          tweet => {
            this.tweetTextCand1 = tweet;
            console.log('El analisis es: ', this.tweetTextCand1);
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

  public loadCountData(candidateName: string): Observable<string> {
    return this.tweetService.getCount(candidateName);
  }


  navigate() {
    console.log('url img candidato', this.leftCandidateImage)
    this.router.navigateByUrl('/ganador', { state: { leftCandidateImage: this.leftCandidateImage } });

  }
  ngOnDestroy(): void {
    // Asegúrate de anular todas las suscripciones cuando se destruya el componente.
    this.subscriptions.unsubscribe();
  }
}
