import { Component } from '@angular/core';
import {HttpService} from '../shared/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpService: HttpService) {}

  onSaveData() {
    this.httpService.storeRecipes().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchData() {
   const fetchData =  this.httpService.fetchRecipes();
   console.log(fetchData);
  }
}
