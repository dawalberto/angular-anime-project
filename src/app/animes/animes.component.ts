import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Anime } from '../interfaces/anime';
import { AppState } from '../interfaces/app-state';
import { Store } from '@ngrx/store';
import { LastAnimesSearched, LastNameAnimeSearched } from '../anime.actions';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})

export class AnimesComponent implements OnInit {

  constructor(
    private animesService:AnimesService,
    private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('lastAnimesSearched').subscribe(lastAnimes => {
      this.animes = lastAnimes
    })
    // this.store.select('nameAnimeSearched').subscribe(name => {
    //   this.name = name
    // })
  }

  name:string = 'Dragon ball'
  animes:Anime[] = []

  getAnimesByName(): void {
    this.animesService.getAnimesByName(this.name)
      .subscribe(animes => {
        this.animes = animes
        const actionLastAnime = new LastAnimesSearched(animes)
        // const actionName = new LastNameAnimeSearched(this.name)
        this.store.dispatch(actionLastAnime)
        // this.store.dispatch(actionName)
      })
  }

}
