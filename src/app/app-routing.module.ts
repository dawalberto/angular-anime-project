import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimesComponent } from './animes/anime-list/animes.component';
import { AnimeDetailComponent } from './animes//anime-detail/anime-detail.component';
import { HomeComponent } from './home/home.component';
import { MangaListComponent } from './mangas/manga-list/manga-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animes', component: AnimesComponent },
  { path: 'anime-detail/:id', component: AnimeDetailComponent },
  { path: 'mangas', component: MangaListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
