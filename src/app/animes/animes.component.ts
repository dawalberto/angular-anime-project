import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Observable } from 'rxjs';
import { Anime } from '../interfaces/anime';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})

export class AnimesComponent implements OnInit {

  constructor(private animesService:AnimesService) { }

  ngOnInit() {
    this.getAnimesByName()
  }

  name:string = 'Dragon ball'
  animes:Anime[] = []

  getAnimesByName(): void {
    this.animesService.getAnimesByName(this.name)
      .subscribe(animes => {
        this.animes = animes
      })
  }

}
