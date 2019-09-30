import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

import { AnimesComponent } from './animes/animes.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
