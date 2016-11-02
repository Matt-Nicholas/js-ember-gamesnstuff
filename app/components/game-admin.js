import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(game, params) {
      this.sendAction('update', game, params)
    },
    destroyRecord(game) {
      this.sendAction('destroyRecord', game)
    }
  }

});
