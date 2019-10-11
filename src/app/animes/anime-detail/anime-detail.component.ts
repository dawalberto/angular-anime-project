import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../../animes.service';
import { AnimeDetail } from '../../interfaces/anime-detail';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})

export class AnimeDetailComponent implements OnInit {

  constructor(
    private animesService:AnimesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAnimeById()
  }

  anime:AnimeDetail

  getAnimeById(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.animesService.getAnimeById(id)
      .subscribe(anime => {
        this.anime = anime
      })
  }

}
