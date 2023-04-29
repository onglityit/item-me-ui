import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './account/home/home.component';
import { ANewSubcriptionComponent } from './account/landlord/a-new-subcription/a-new-subcription.component';
import { ExistingSubcriptionComponent } from './account/landlord/existing-subcription/existing-subcription.component';
import { SubcriptionListComponent } from './account/landlord/subcription-list/subcription-list.component';
import { SubcriptionListItemComponent } from './account/landlord/subcription-list-item/subcription-list-item.component';
import { MaterialUiModule } from './lib/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    ANewSubcriptionComponent,
    ExistingSubcriptionComponent,
    SubcriptionListComponent,
    SubcriptionListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
