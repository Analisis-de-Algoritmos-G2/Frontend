import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-sentimientos',
  templateUrl: './sentimientos.component.html',
  styleUrls: ['./sentimientos.component.css']
})
export class SentimientosComponent {
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {left:'NONE', right:'NONE'};  // Declara la propiedad para almacenar las selecciones
  leftCandidateImage: string = ''; // Add this line

  constructor(
    private router: Router,
    private candidateService: CandidateService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.getSelectedCandidates();
    this.themeService.getSelectedTheme().subscribe(theme => {
      this.selectedTheme = theme;
    });  // Llama a getSelectedCandidates en ngOnInit
  }

  getSelectedCandidates(): void {
    this.candidateService.getSelectedCandidates().subscribe(
      selection => {
        this.selectedCandidates = selection;
       console.log('updated selection', this.selectedCandidates);
        
        if (selection.left) {
          this.leftCandidateImage = this.candidateService.getCandidateImage(selection.left);
          console.log('url img candidato', this.leftCandidateImage)
        }
      }
    );
  }

  navigate() {
    console.log('url img candidato', this.leftCandidateImage)
    this.router.navigateByUrl('/sentimientos-negativos', { state: { leftCandidateImage: this.leftCandidateImage } });

  }
}
