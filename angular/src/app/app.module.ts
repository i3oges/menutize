import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './modules/material.module';
import { HoursComponent } from './hours/hours.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './menu/add/add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateLocationComponent } from './location/update/update.component';
import { UpdateHoursComponent } from './hours/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HoursComponent,
    HomeComponent,
    LocationComponent,
    OrderComponent,
    AddComponent,
    UpdateLocationComponent,
    UpdateHoursComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
