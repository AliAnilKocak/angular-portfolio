import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
