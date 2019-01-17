import {Component} from '@angular/core';
import {HttpEvent} from '@angular/common/http';
import {AuthorizationService, HttpService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpService: HttpService,
              private authService: AuthorizationService) {}

  onSaveData() {
    this.httpService.storeRecipes().subscribe((response: HttpEvent<Object>) => {
      console.log(response);
    });
  }

  onFetchData() {
   const fetchData =  this.httpService.fetchRecipes();
   console.log(fetchData);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  LogOut() {
    this.authService.logout();
  }
}
