import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { AppsListComponent } from './components/apps-list/apps-list.component';

//Services
import { AppsService } from "./services/apps.service";

const appRoutes: Routes = [
  { path: '', component: AppsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppsListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
