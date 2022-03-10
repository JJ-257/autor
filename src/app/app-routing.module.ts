import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor/autor.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
//{ path: 'user/login', component: UserLoginComponent},
//{ path: 'admin/login', component: UserLoginComponent},
{ path: 'login', component: UserLoginComponent},
//{ path: 'login', component: HeaderComponent},
//{ path: 'user/login/autor/sviautori', component: AutorComponent},
//{ path: 'admin/login/autor/sviautori', component: AutorComponent},
{ path: 'login/autor/sviautori', component: AutorComponent,canActivate:[AuthGaurdService]},
////{ path: 'autor/sviautori', component: AutorComponent},
//{ path: '', component: UserLoginComponent},
{ path: 'login/autor/sviautori/promjeni', component: AutorComponent, canActivate:[AuthGaurdService]},
{ path: 'login/autor/sviautori/izbrisi', component: AutorComponent, canActivate:[AuthGaurdService]},
{ path: 'login/autor/dodaj', component: AutorComponent, canActivate:[AuthGaurdService]},
{ path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, AutorComponent, LogoutComponent];