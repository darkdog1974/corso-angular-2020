import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { environment } from "../environments/environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase) // imports firebase/app needed for everything
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
