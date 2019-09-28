import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Anime } from './interfaces/anime';
import { ResponseJikan } from './interfaces/response-jikan';

@Injectable({
  providedIn: 'root'
})

export class AnimesService {

  constructor(private http:HttpClient) { }

  url:string = 'https://api.jikan.moe/v3/search/anime?q='

  getAnimesByName(name:string): Observable<Anime[]> {
    return this.http.get<ResponseJikan>(`${this.url}${name}`)
    .pipe(
      map(res => res.results)
    )
  }

}
