import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'servers/:id', component: ServerComponent},
  {path: 'servers/:id/edit', component: EditServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

