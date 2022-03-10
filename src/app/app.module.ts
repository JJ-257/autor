import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorService } from './autor.service';
import { LoginuserService } from './loginuser.service';
import { AutorComponent } from './autor/autor.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './HttpInterceptorService ';
import { AuthGaurdService } from './service/auth-gaurd.service';



@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    routingComponents,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [AutorService,LoginuserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },AuthGaurdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
