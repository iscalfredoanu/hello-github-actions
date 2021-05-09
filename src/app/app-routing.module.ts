import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
 {
    path: '',
    redirectTo:'/characters',
    pathMatch:'full'
  },
  {
    path: 'characters',
    component: CharacterComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
      path: 'location/:id',
      component: LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
