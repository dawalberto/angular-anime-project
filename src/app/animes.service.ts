import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Anime } from './interfaces/anime';
import { ResponseJikan } from './interfaces/response-jikan';
import { AnimeDetail } from './interfaces/anime-detail';

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

  getAnimeById(id:number): Observable<AnimeDetail> {
    return this.http.get<AnimeDetail>(`${this.url}/anime/${id}`)
  }

}
