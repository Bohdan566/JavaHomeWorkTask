
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
},
  {
  path: 'lists', loadChildren : () => import('./lists-module/lists.module').then(m => m.ListsModule)
}];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
