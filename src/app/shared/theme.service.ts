import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private selectedTheme = new BehaviorSubject<string>('');

  getSelectedTheme() {
    return this.selectedTheme.asObservable();
  }

  selectTheme(theme: string) {
    this.selectedTheme.next(theme);
  }
}
