import './imports/methods/todos';
import './imports/publications/todos'

import { Meteor } from 'meteor/meteor';
 
import { loadParties } from './imports/fixtures/parties';
 
Meteor.startup(() => {
  loadParties();
});
