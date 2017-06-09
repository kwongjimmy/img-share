import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { CloudinaryService } from './services/cloudinary.service';


@NgModule({
  imports:      [ BrowserModule, CloudinaryService ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ CloudinaryService ]
})
export class AppModule { }
