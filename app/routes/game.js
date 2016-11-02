import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id)
  },
  actions: {
    destroyRecord(game) {
      game.destroyRecord();
      this.transitionTo('admin');
    },
    sellGame(game) {
      game.set('quantity', (game.get('quantity') - 1));
    },
    update(game, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          game.set(key,params[key]);
        }
      });
      game.save();
    },
  }
});
