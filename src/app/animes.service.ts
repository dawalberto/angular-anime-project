import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Anime } from './interfaces/anime';
import { ResponseJikan } from './interfaces/response-anime-jikan';
import { AnimeDetail } from './interfaces/anime-detail';
import { Manga } from './interfaces/manga';
import { ResponseMangaJikan } from './interfaces/response-manga-jikan';

@Injectable({
  providedIn: 'root'
})

export class AnimesService {

  constructor(private http:HttpClient) { }

  url:string = 'https://api.jikan.moe/v3'

  getAnimesByName(name:string): Observable<Anime[]> {
    return this.http.get<ResponseJikan>(`${this.url}/search/anime?q=${name}`)
    .pipe(
      map(res => res.results)
    )
  }

  getMangasByName(name:string): Observable<Manga[]> {
    return this.http.get<ResponseMangaJikan>(`${this.url}/search/manga?q=${name}`)
    .pipe(
      map(res => res.results)
    )
  }

  getAnimeById(id:number): Observable<AnimeDetail> {
    return this.http.get<AnimeDetail>(`${this.url}/anime/${id}`)
  }

}
