import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateusersComponent } from './components/createusers/createusers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { ViewmapComponent } from './components/viewmap/viewmap.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createuser', component: CreateusersComponent },
  { path: 'manageuser', component: ManageusersComponent },
  { path: 'viewmap', component: ViewmapComponent },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
