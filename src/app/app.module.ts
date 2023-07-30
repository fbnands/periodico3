

import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'; 
import { DayComponent } from './components/day/day.component'; 
import { NewsComponent } from './components/news/news.component'; 
import { MenuComponent } from './components/menu/menu.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    DayComponent, 
    NewsComponent, 
    MenuComponent, 
  ],
  imports: [
    BrowserModule 
  ],
  providers: [], 
  bootstrap: [AppComponent] 
})
export class AppModule { } 
