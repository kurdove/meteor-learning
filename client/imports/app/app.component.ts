import { Component } from '@angular/core';
import { MeteorObservable, Observable } from 'rxjs';
import { Parties } from '../../../both/collections/parties.collection';
// import { zoneOperator } from 'rxjs';
 
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    parties: Observable<any[]>;
 
    constructor() {
        this.parties = MeteorObservable.subscribe('parties').subscribe(() => { this.parties=Parties.find({}).zone(); });
        // this.parties = Parties.find({}).zone();
        // this.parties = Parties.find({}).pipe(zoneOperator());
    }
}