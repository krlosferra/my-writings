import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritingAddComponent } from './component/writing-add/writing-add.component';
import { WritingService } from './service/writing.service';
import { WritingListComponent } from './component/writing-list/writing-list.component';
import { HomeComponent } from './component/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    WritingAddComponent,
    WritingListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
