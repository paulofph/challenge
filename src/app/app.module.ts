import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

//Components
import { AppComponent } from './app.component';
import { AppsListComponent } from './components/apps/apps-list/apps-list.component';

//Services
import { AppsService } from "./services/apps.service";
import { AppsComponent } from './components/apps/apps.component';

const appRoutes: Routes = [
  { path: '', component: AppsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppsListComponent,
    AppsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    HttpClientModule,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
