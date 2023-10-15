import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { FightComponent } from './fight/fight.component';
import { JugIzquierdoComponent } from './jug-izquierdo/jug-izquierdo.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'fight', component: FightComponent},
  {path: 'jug-izquierdo', component: JugIzquierdoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
