import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpEvent} from '@angular/common/http';
import {HttpService} from '../../services';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../../ngrx-global-store/app.reducer';
import * as FromAuthReducer from '../../auth/ngrx-auth-store/auth.reducer';
import {Observable} from 'rxjs';
import {SigninComponent} from '../../auth';
import * as FromAuthActions from '../../auth/ngrx-auth-store/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<FromAuthReducer.AuthState>;
  @ViewChild('signInComponent', {read: SigninComponent}) signInComponent: SigninComponent;
  constructor(private httpService: HttpService,
              private store: Store<FromAppReducer.AppState>) {

  }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.httpService.storeRecipes().subscribe((response: HttpEvent<Object>) => {
      console.log(response);
    });
  }

  onFetchData() {
   const fetchData =  this.httpService.fetchRecipes();
   console.log(fetchData);
  }

  LogOut() {
    this.store.dispatch(new FromAuthActions.LogOut());
  }

}
