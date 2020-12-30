import { Component, VERSION } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  utentiCollection: AngularFirestoreCollection<any>;
  utenti: Observable<any[]>;
 

  constructor(public afs: AngularFirestore) {
    this.utentiCollection = this.afs.collection("UTENTI");
    this.utenti = afs.collection("UTENTI").valueChanges();
  }
}
