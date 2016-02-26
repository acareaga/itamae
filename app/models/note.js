// import DS from 'ember-data';
import Ember from 'ember';

const electron = requireNode('electron');
const remote = electron.remote;
const mainProcess = remote.require('./electron.js');

// export default DS.Model.extend({
//   content: DS.attr('string')
// });

export default DS.Model.extend({
  model() {
    return this.store.findAll('note');
  },

  afterModel() {
    let notes = model.toArray().map(note => note.serialize({includeId: true}))
    mainProcess.updateMenu(notes);
  }
});
