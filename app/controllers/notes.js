import Ember from 'ember';

const electron = requireNode('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./electron.js');

export default Ember.Controller.extend({

  _setup: function() {
    ipc.on('note-selected', (event, noteId) => {
      this.transitionToRoute('notes.note', noteId);
    });
  }.on('init'),

  _updateMenu: Ember.observer('model.@each.content'),

  newNoteTitle: null,

  actions:{
    createNote(){
      this.store.createRecord('note',{
        id: this.get('newNoteTitle') + '.md'
      }).save();
    }
  }
});
