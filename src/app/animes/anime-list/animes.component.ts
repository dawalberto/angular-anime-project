import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../../animes.service';
import { Anime } from '../../interfaces/anime';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { LastSearchedAnime } from '../animes.actions';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})

export class AnimesComponent implements OnInit {

  constructor(private animesService:AnimesService, private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('lastSearchedAnime').subscribe(anime => {
      this.animes = anime
    })
  }

  name:string = ''
  animes:Anime[] = []

  getAnimesByName(): void {
    this.animesService.getAnimesByName(this.name)
      .subscribe(animes => {
        this.animes = animes
        const action = new LastSearchedAnime(animes)
        this.store.dispatch(action)
      })
  }

}
