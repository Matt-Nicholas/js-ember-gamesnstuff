import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),

  actions: {
    saveGame(params){
      this.sendAction('saveGame', params);
    }
  }

});
