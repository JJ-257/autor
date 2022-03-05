import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Autor } from './autor';
import { AutorService } from './autor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  public autori: Autor[] = [];
  public urediAutor: Autor;


  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.dohvatiSveAutore();
  }
  

  public dohvatiSveAutore(): void{
    this.autorService.dohvatiSveAutore().subscribe(
      (response: Autor[]) => {
        this.autori = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public dodajAutora(addForm: NgForm): void {
    document.getElementById('zatvori').click();
   this.autorService.dodajAutora(addForm.value).subscribe (
     (response: Autor) => {
       console.log(response);
       this.dohvatiSveAutore();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
    );
  }

  public promjeniAutora(autor: Autor): void {
   this.autorService.promjeniAutora(autor).subscribe (
     (response: Autor) => {
       console.log(response);
       this.dohvatiSveAutore();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
    );
  }

  public onOpenModal(autor: Autor, mode: string): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#dodajAutora');
    }
    if(mode === 'edit'){
      this.urediAutor = autor;
      button.setAttribute('data-target', '#urediAutora');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#izbrisiAutora');
    }

    container?.appendChild(button);
    button.click();

  }
}
