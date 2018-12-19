import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated: boolean = false;
  user2Activated: boolean = false;
  subscription: Subscription;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.userService.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = true;
      }
      if (id === 2) {
        this.user2Activated = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
