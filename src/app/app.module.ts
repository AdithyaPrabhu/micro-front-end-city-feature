import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { MysoreComponent } from './mysore/mysore.component';

const appRoutes: Routes = [
  { path: 'city/Bangalore', component: BangaloreComponent },
  { path: 'city/Mysore', component: MysoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BangaloreComponent,
    MysoreComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
