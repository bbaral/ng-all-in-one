import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  goBackToServers() {
    this.router.navigate(['/servers']);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
