import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light');
  currentTheme = this.theme.asObservable();

  constructor() { }

  toggleTheme() {
    if (this.theme.value === 'light') {
      this.theme.next('dark');
      document.documentElement.classList.add('dark');
    } else {
      this.theme.next('light');
      document.documentElement.classList.remove('dark');
    }
  }
}
