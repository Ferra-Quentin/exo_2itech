import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img src="/assets/img/angular-error.png" alt="Erreur">
      <h1>Page introuvable</h1>
      <a routerLink="/formations" class="btn-flat blue">Retour aux formations</a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
