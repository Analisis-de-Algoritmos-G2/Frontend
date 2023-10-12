import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private selectedCandidates = new BehaviorSubject<{ left?: string; right?: string }>({});

  getSelectedCandidates() {
    return this.selectedCandidates.asObservable();
  }

  selectCandidate(side: 'left' | 'right', candidate: string) {
    const currentSelection = this.selectedCandidates.value;
    const newSelection = { ...currentSelection, [side]: candidate };
    this.selectedCandidates.next(newSelection);
  }
}
