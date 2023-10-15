import { Component } from '@angular/core';

@Component({
  selector: 'app-jug-izquierdo',
  templateUrl: './jug-izquierdo.component.html',
  styleUrls: ['./jug-izquierdo.component.css']
})
export class JugIzquierdoComponent {
  selectedCandidates: { left?: string; right?: string } = {};
}
