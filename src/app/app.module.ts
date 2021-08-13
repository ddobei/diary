import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiaryMainComponent } from './diary-main/diary-main.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    DiaryMainComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    PickerModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
