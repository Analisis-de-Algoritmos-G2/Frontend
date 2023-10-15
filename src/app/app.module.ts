import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { FightComponent } from './fight/fight.component';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CandidateService } from './shared/candidate.service';
import { JugIzquierdoComponent } from './jug-izquierdo/jug-izquierdo.component';
import { JugDerechoComponent } from './jug-derecho/jug-derecho.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    FightComponent,
    TextCarouselComponent,
    CarouselComponent,
    JugIzquierdoComponent,
    JugDerechoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
