import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { FightComponent } from './fight/fight.component';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    FightComponent,
    TextCarouselComponent,
    PhotoCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
