import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/index';
@NgModule({
  imports: [ BrowserModule ,FormsModule,routing],
  declarations: [ AppComponent, LoginComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
