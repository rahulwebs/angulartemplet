import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';  
import { HomeComponent } from './home/home.component';  
import { AboutComponent } from './about/about.component';




const routes: Routes = [  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // {path:  '**', component: HomeComponent},
  {path:  'home', component: HomeComponent},  
  {path:  'service', component:ServiceComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
