import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { AppsListComponent } from './components/apps/apps-list/apps-list.component';

//Services
import { AppsService } from "./services/apps.service";
import { AppsComponent } from './components/apps/apps.component';
import { SearchPipe } from './_shared/ui/pipes/search/search.pipe';
import { CategoriesListComponent } from './components/apps/categories-list/categories-list.component';
import { PricePipe } from './_shared/ui/pipes/price/price.pipe';
import { CategoryPipe } from './_shared/ui/pipes/category/category.pipe';

const appRoutes: Routes = [
  { path: '', component: AppsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppsListComponent,
    AppsComponent,
    SearchPipe,
    CategoriesListComponent,
    PricePipe,
    CategoryPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterTestingModule
  ],
  providers: [
    HttpClientModule,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
