import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { FightComponent } from './fight/fight.component';
import { TextCarouselComponentComponent } from './text-carousel-component/text-carousel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    FightComponent,
    TextCarouselComponentComponent
  ],
  exports: [TextCarouselComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
