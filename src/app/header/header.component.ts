import { Component } from '@angular/core';
import {HttpService, AuthorizationService} from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpService: HttpService,
              private authService: AuthorizationService) {}

  onSaveData() {
    this.httpService.storeRecipes().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchData() {
   const fetchData =  this.httpService.fetchRecipes();
   console.log(fetchData);
  }

  LogOut() {
    this.authService.logout();
  }
}
