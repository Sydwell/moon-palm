import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { HomeComponent } from './home/home.component';
import { ConComponent } from './con/con.component';

@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    AboutComponent,
    MoreComponent,
    HomeComponent,
    ConComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
