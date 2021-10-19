import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Lesson1Component } from './lesson1/lesson1.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  HelloComponent,
                  Lesson1Component
                
                
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
