import { Component, Renderer2, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TimeoutService } from './services/timeout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  previousUrl: string;
  isTimedOut = false;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if (this.isTimedOut) {
      this.timeoutService.start();
    } else {
      this.timeoutService.restart();
    }
  }

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private timeoutService: TimeoutService
  ) {
    this.handleRouterEvents();
  }

  ngOnInit() {
    this.subscribeToTimeout();
  }

  subscribeToTimeout() {
    this.timeoutService.isTimedOut.subscribe((timeoutStatus: boolean) => {
      this.isTimedOut = timeoutStatus;
    });
  }

  handleRouterEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        let currentUrlSlug = event.url.slice(1);
        currentUrlSlug = currentUrlSlug.replace(/\//g, '-');
        if (currentUrlSlug) {
          this.renderer.addClass(document.body, currentUrlSlug);
        }
        this.previousUrl = currentUrlSlug;
      }
    });
  }
}
