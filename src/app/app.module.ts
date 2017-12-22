import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutBisonMatchComponent } from './about-bison-match/about-bison-match.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
const appRoutes: Routes = [
  { path: 'toAboutBM', component: AboutBisonMatchComponent },
  { path: 'toHome',      component: HomeComponent },
  { path: 'toResults',      component: ResultsComponent },
    { path: 'quizStart',      component: QuizStartComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    AboutBisonMatchComponent,
    HomeComponent,
    ResultsComponent,
    QuizStartComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
     NgbModule.forRoot(),
     RouterModule.forRoot(
       appRoutes,
       {enableTracing: true} //for debugging purposes only
     )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
