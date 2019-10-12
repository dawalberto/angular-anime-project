import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/animes.service';
import { Manga } from 'src/app/interfaces/manga';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent implements OnInit {

  constructor(private animesService:AnimesService) { }

  ngOnInit() {
    this.getMangasByName()
  }

  name:string = 'One punch man'
  mangas:Manga[] = []

  getMangasByName(): void {
    this.animesService.getMangasByName(this.name)
      .subscribe(mangas => {
        this.mangas = mangas
      })
  }

}
