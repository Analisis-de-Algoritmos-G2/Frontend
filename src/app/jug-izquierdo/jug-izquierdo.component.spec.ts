import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';

@Component({
  selector: 'app-jug-izquierdo',
  templateUrl: './jug-izquierdo.component.html',
  styleUrls: ['./jug-izquierdo.component.css']
})
export class JugIzquierdoComponent implements OnInit {
  selectedCandidates: { left?: string; right?: string } = {}; // Declarar la propiedad

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    // Suscríbete al Observable para obtener las selecciones
    this.candidateService.getSelectedCandidates().subscribe(selection => {
      this.selectedCandidates = selection;
    });
  }
}
