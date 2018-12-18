import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  number: number = 0;
  someValue: any;
  subscription$: Subscription;
  anotherSubscription$: Subscription;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const myNumber = interval(1000);

    this.subscription$ = myNumber.subscribe((val: number) => {
      this.number = val;
      console.log(this.number);
    });

    const hello = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('hello World');
      }, 800);

      setTimeout(() => {
        observer.next('hello Planet');
      }, 400);
    });

    this.anotherSubscription$ = hello.subscribe((val: any) => {
      this.someValue = val;
    });

  }

  TimerButtonStop() {
    this.cdr.detach();
  }

  TimerButtonStart() {
    this.cdr.reattach();
  }

  TimerButtonCheck() {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.anotherSubscription$.unsubscribe();
    console.log('ngOnDestroy call');
  }

}

