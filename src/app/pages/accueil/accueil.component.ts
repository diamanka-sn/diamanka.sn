import { AfterViewInit, Component } from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})

export class AccueilComponent {

  textArray: string[] = ["Développeur Full Stack 🐼", "P A S S I O N N É", "M O U H A M A D O U", "D I A M A N K A"];
  currentIndex: number = 0;
  currentChar: number = 0;
  displayText: string = "";
  isDeleting: boolean = false;

  twitterHandle: string = "diamanka_sn";
  githubUsername: string = "diamanka-sn";
  linkdinUsername: string = "diamanka-sn"

  cursorBlink: boolean = true;

  public greeting: string;

  constructor() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 14) {
      this.greeting = 'B O N J O U R ';
    } else {
      this.greeting = 'B O N S O I R';
    }
  }

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    const currentText = this.textArray[this.currentIndex]
    if (this.isDeleting) {
      if (this.currentChar > 0) {
        this.displayText = currentText.substring(0, this.currentChar - 1)
        this.currentChar--
      } else {
        this.isDeleting = false
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length
      }
    } else {
      this.displayText = currentText.substring(0, this.currentChar + 1)
      this.currentChar++
      if (this.currentChar === currentText.length + 1) {
        this.isDeleting = true
        setTimeout(() => this.typeText(), 2000)
        return
      }
    }
    this.cursorBlink = !this.cursorBlink

    setTimeout(() => this.typeText(), this.isDeleting ? 100 : 80)
  }

  get cursor(): string {
    return this.cursorBlink ? '|' : ' ';
  } 
  
}
