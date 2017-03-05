import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CompletedFilterPipe} from './index';



@NgModule({
  declarations: [
    CompletedFilterPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports:[
    CompletedFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
