import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { FightComponent } from './fight/fight.component';
import { JugIzquierdoComponent } from './jug-izquierdo/jug-izquierdo.component';
import { JugDerechoComponent } from './jug-derecho/jug-derecho.component';
import { SentimientosComponent } from './sentimientos/sentimientos.component'; 
import { SentimientosNegativosComponent } from './sentimientos-negativos/sentimientos-negativos.component';
import { AnalisisTweetsComponent } from './analisis-tweets/analisis-tweets.component';
import { DebateCandidatosComponent } from './debate-candidatos/debate-candidatos.component';
import { GanadorComponent } from './ganador/ganador.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'fight', component: FightComponent},
  {path: 'jug-izquierdo', component: JugIzquierdoComponent},
  {path: 'jug-derecho',component: JugDerechoComponent},
  {path: 'sentimientos', component: SentimientosComponent},
  {path: 'sentimientos-negativos',component: SentimientosNegativosComponent},
  {path: 'analisis-tweets', component: AnalisisTweetsComponent},
  {path: 'debate-candidatos', component: DebateCandidatosComponent},
  {path: 'ganador', component: GanadorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
