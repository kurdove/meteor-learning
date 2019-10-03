import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';
 
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  parties: Observable<Party[]>;
 
  constructor() {
      // this.parties = MeteorObservable.subscribe('parties').subscribe(() => { this.parties=Parties.find({}).zone(); });
      this.parties = Parties.find({}).fetch();
      // this.parties = Parties.find({}).pipe(zoneOperator());
  }
}