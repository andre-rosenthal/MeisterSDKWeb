import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConnectionComponent } from 'src/app/connection/connection.component';
import { ConnectionListComponent } from 'src/app/connectionlist/connectionlist.component';
import { ConnectionService } from 'src/service/connection.service';
import { MaterialDesignModule } from 'src/app/materialdesign/materialdesign.module';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ConnectionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
