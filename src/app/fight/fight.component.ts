import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit{
  selectedTheme: string = 'Seguridad';
  selectedCandidates: { left?: string; right?: string } = {left:'NONE', right:'NONE'};  // Declara la propiedad para almacenar las selecciones

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
        console.log('Updated selection:', this.selectedCandidates);  // Log updated selection
      }
    );
  }

  navigate() {
    console.log('Selected candidates:', this.selectedCandidates, 'Selected Topic: ', this.selectedTheme); // Log selected candidates
    this.router.navigateByUrl('/jug-izquierdo');
  }

}
