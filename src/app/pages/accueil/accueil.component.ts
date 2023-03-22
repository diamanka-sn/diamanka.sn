import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent {

  textArray: string[] = ["Architecte logiciel", "</>Developpeur Full-Stack", "P A S S I O N N E"];
  currentIndex: number = 0;
  currentChar: number = 0;
  displayText: string = "";
  isDeleting: boolean = false;

  whatsappNumber: string = "+221778795172";
  twitterHandle: string = "diamanka_sn";
  githubUsername: string = "diamanka-sn";

  cursorBlink: boolean = true;

  public greeting: string;

  constructor() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 14) {
      this.greeting = 'Bonjour';
    } else {
      this.greeting = 'Bonsoir';
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
        setTimeout(() => this.typeText(), 2000) // Wait 1 second before deleting
        return
      }
    }
    this.cursorBlink = !this.cursorBlink

    setTimeout(() => this.typeText(), this.isDeleting ? 100 : 80)
  }

  get cursor(): string {
    return this.cursorBlink ? '|' : ' '; // Use HTML non-breaking space
  }

}
