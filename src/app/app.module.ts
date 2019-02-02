import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/home.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppEventsComponent } from './events/events.component';
import { AppNinjasComponent } from './ninjas/ninjas.component';
import { AppContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppEventsComponent,
    AppNinjasComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
