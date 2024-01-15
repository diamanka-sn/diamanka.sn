import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'diamanka';
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const loaderContainer = document.querySelector('.loader') as HTMLElement;

    if (loaderContainer) {
      loaderContainer.style.display = 'none';
    }
  }
}
