import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jug-izquierdo',
  templateUrl: './jug-izquierdo.component.html',
  styleUrls: ['./jug-izquierdo.component.css']
})
export class JugIzquierdoComponent implements OnInit{
  leftCandidateImage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.leftCandidateImage = this.activatedRoute.snapshot.params['leftCandidateImage']; // Get the leftCandidateImage parameter from the params property
  }

}