import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public dohvatiSveAutore(): Observable<Autor[]>{
    return this.http.get<Autor[]>(`${this.apiServerUrl}{"/user/autori", "/admin/autori"}/sviautori`);
  }

  public dodajAutora(autor: Autor): Observable<Autor>{
    return this.http.post<Autor>(`${this.apiServerUrl}{"/user/autori", "/admin/autori"}/dodaj`, autor);
  }

  public promjeniAutora(autor: Autor): Observable<Autor>{
    return this.http.put<Autor>(`${this.apiServerUrl}{"/user/autori", "/admin/autori"}/promjeni`, autor);
  }

  public izbrisiAutora(autorId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/{"/user/autori", "/admin/autori"}/${autorId}`);
  }

  public dohvatiKnjigu(autorId: number): Observable<Autor>{
    return this.http.get<Autor>(`${this.apiServerUrl}/{"/user/autori", "/admin/autori"}/${autorId}`);
  }
}
