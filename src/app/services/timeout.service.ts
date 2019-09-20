import { Injectable } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TimeoutService {
  isTimedOutSubject = new BehaviorSubject<boolean>(true);
  isTimedOut = this.isTimedOutSubject.asObservable();
  constructor(private userIdle: UserIdleService, private router: Router) {}

  updateTimeoutStatus(value: boolean): void {
    this.isTimedOutSubject.next(value);
  }

  start() {
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => {
      this.updateTimeoutStatus(false);
    });
    this.userIdle.onTimeout().subscribe(() => {
      this.updateTimeoutStatus(true);
      this.router.navigate(['/']);
    });
  }

  stop() {
    this.userIdle.stopTimer();
    this.updateTimeoutStatus(false);
  }

  stopWatching() {
    this.userIdle.stopWatching();
    this.updateTimeoutStatus(false);
  }

  startWatching() {
    this.userIdle.startWatching();
    this.updateTimeoutStatus(false);
  }

  restart() {
    this.userIdle.resetTimer();
    this.updateTimeoutStatus(false);
  }
}
