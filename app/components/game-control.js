import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),


  actions: {
    update(game, params) {
      this.sendAction('update', game, params)
    },
    destroyRecord(game) {
      this.sendAction('destroyRecord', game)
    },
    sellGame(game) {
      this.sendAction('sellGame', game);
    }
  }
});
