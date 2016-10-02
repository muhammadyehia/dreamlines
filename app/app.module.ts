import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/index';
import {LoginService} from './services/index'
import { WallComponent } from './wall/index';
import { PostComponent } from './posts/index'
import { commentComponent } from './comments/index'
@NgModule({
  imports: [ BrowserModule ,HttpModule,FormsModule,routing],
  declarations: [ AppComponent, LoginComponent,WallComponent,PostComponent,commentComponent],
  bootstrap: [ AppComponent ],
  providers:[LoginService]
})
export class AppModule { }

