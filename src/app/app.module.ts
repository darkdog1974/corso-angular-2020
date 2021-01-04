import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { environment } from "../environments/environment";
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  declarations: [AppComponent, HelloComponent, NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
