import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './home/home.component';
import { AppEventsComponent } from './events/events.component';
import { AppNinjasComponent } from './ninjas/ninjas.component';
import { AppContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  { path: 'events', component: AppEventsComponent },
  { path: 'ninjas', component: AppNinjasComponent },
  { path: 'contact', component: AppContactComponent },
  { path: 'home', component: AppHomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
