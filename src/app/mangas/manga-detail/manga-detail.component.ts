import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/animes.service';
import { ActivatedRoute } from '@angular/router';
import { MangaDetail } from 'src/app/interfaces/manga-detail';


@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.scss']
})


export class MangaDetailComponent implements OnInit {

  constructor(
    private animeService:AnimesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMangaById()
  }

  manga:MangaDetail

  getMangaById() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.animeService.getMangaById(id)
      .subscribe(manga => {
        this.manga = manga
      })
  }

}
