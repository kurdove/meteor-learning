import { MongoObservable } from 'meteor-rxjs';
 
// export const Parties = new MongoObservable.Collection('parties');
export const Parties = MongoObservable.fromExisting(Meteor.parties);