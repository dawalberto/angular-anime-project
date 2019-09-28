import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Anime } from './interfaces/anime';

@Injectable({
  providedIn: 'root'
})

export class AnimesService {

  constructor(private http:HttpClient) { }

  url:string = 'https://api.jikan.moe/v3/search/anime?q='

  getAnimesByName(name:string): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.url}${name}`)
  }

}
