import { Component } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  textArray: string[] = ["Discutons projets.", "Échangeons sur nos projets.", "Réfléchissons ensemble à nos projets.", "Collaborons sur nos projets."];

  currentIndex: number = 0;
  currentChar: number = 0;
  displayText: string = "";
  isDeleting: boolean = false;

  cursorBlink: boolean = true;

  whatsappNumber: string = "+221778795172";
  twitterHandle: string = "diamanka_sn";
  githubUsername: string = "diamanka-sn";
  
  constructor(private http: HttpClient) {}

  verifyCaptcha(response: string) {
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const secret = '6LexdzQlAAAAAEBVGx048OJ4UIEqFYHCfX3zPFPe';
    const body = { response, secret };
    return this.http.post(url, body);
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
