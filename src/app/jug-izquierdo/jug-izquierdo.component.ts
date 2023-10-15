
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/candidate.service';  // Importa CandidateService
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-jug-izquierdo',
  templateUrl: './jug-izquierdo.component.html',
  styleUrls: ['./jug-izquierdo.component.css'],
})
export class JugIzquierdoComponent implements OnInit {
  leftCandidateImage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.leftCandidateImage = data['leftCandidateImage'];
    });
  }

  navigate() {
    console.log('url img candidato', this.leftCandidateImage)
    this.router.navigateByUrl('/jug-derecho');
  }
}