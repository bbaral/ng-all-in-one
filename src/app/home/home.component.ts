import { Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject,
  interval,
  Observable,
  Observer,
  of,
  ReplaySubject,
  Subject,
  Subscription} from 'rxjs';
import {combineAll, concatAll, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  id: number = 0;
  combine: string[] = [];
  someValue: any;
  intervalSubscribe: Subscription;
  subscription$: Subscription;
  combineAllSubs: Subscription;
  behaveSubject: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map(
      data => of(data * 2)),
      concatAll());
    this.intervalSubscribe = myNumbers.subscribe(
      value => this.id = value
    );

    const hello = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('hello World');
      }, 800);

      setTimeout(() => {
        observer.next('hello Planet');
      }, 400);
    });

    this.subscription$ = hello.subscribe((val: any) => {
      this.someValue = val;
    });

    const combine = interval(1000).pipe(take(2));
    const x = combine.pipe(map(val =>
      interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5))));

    const result = x.pipe(combineAll());
    this.combineAllSubs = result.subscribe(res => this.combine = res);

}

  ngOnDestroy(): void {
    this.intervalSubscribe.unsubscribe();
    this.subscription$.unsubscribe();
    console.log('ngOnDestroy call');
  }

}
