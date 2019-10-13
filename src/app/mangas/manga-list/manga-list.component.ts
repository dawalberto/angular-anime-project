import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/animes.service';
import { Manga } from 'src/app/interfaces/manga';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { LastSearchedManga } from '../mangas.actions';


@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})


export class MangaListComponent implements OnInit {

  constructor(private animesService:AnimesService, private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('lastSearchedManga').subscribe(manga => {
      this.mangas = manga
    })
  }

  name:string = ''
  mangas:Manga[] = []

  getMangasByName(): void {
    this.animesService.getMangasByName(this.name)
      .subscribe(mangas => {
        this.mangas = mangas
        const action = new LastSearchedManga(mangas)
        this.store.dispatch(action)
      })
  }

}
