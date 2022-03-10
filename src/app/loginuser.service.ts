import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
 /* private baseUrl=environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  userPrijava(user: User):Observable<User>{
    console.log(user);
    return this.httpClient.post<User>(`${this.baseUrl}/login`, user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('korisnickoIme')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('korisnickoIme')
  }*/

  // BASE_PATH: 'http://localhost:8080'
  private apiServerUrl=environment.apiBaseUrl;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

 /* public user: User = {
    korisnickoIme: "",
    lozinka: ""
  }*/
  public username: string;
  public password: string;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.post(`${this.apiServerUrl}/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password); 
      }));
  }
  /*authenticationService(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}/login`,username + ":" + password);
  }*/

 

  createBasicAuthToken(username: string, password: string) {
    return  window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
