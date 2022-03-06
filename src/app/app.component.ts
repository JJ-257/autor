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
  public autori: Autor[];
  public urediAutor: Autor;
  public izbrisiAutoraIKnjigu : Autor;


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
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
       addForm.reset();
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

  public izbrisiAutora(autorId: number): void {
    this.autorService.izbrisiAutora(autorId).subscribe (
      (response: void) => {
        console.log(response);
        this.dohvatiSveAutore();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

   public traziAutoraKnjigu(key: string): void {
     console.log(key);
     const rezultat: Autor[] = [];
     for (const autor of this.autori) {
      if(autor.ime?.toLowerCase().indexOf(key?.toLowerCase()) !== -1 
       || autor.prezime?.toLowerCase().indexOf(key?.toLowerCase()) !== -1
       || autor.nazivKnjige?.toLowerCase().indexOf(key?.toLowerCase()) !== -1)
       {
         rezultat.push(autor);
       }

     }

     



     this.autori = rezultat;

     if(rezultat.length === 0 || !key)
     {
       this.dohvatiSveAutore();
     }
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
      this.izbrisiAutoraIKnjigu = autor;
      button.setAttribute('data-target', '#izbrisiAutora');
    }

    container?.appendChild(button);
    button.click();

  }
}


