import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

import { AnimesComponent } from './animes/anime-list/animes.component';
import { AnimeDetailComponent } from './animes/anime-detail/anime-detail.component';
import { HomeComponent } from './home/home.component';
import { animeReducer } from './animes/animes.reducer';
import { MangaListComponent } from './mangas/manga-list/manga-list.component';
import { MangaDetailComponent } from './mangas/manga-detail/manga-detail.component';
import { appReducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeDetailComponent,
    HomeComponent,
    MangaListComponent,
    MangaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})

export class AppModule { }
