import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent,LoginService }  from './login/index';
import { WallComponent } from './wall/index';

@NgModule({
  imports: [ BrowserModule ,HttpModule,FormsModule,routing],
  declarations: [ AppComponent, LoginComponent,WallComponent],
  bootstrap: [ AppComponent ],
  providers:[LoginService]
})
export class AppModule { }

