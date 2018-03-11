import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FmListComponent } from './fm-list/fm-list.component';
import { FmService } from './fm-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FmListComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [FmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
