import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    sellGame(game) {
      game.set('quantity', (game.get('quantity') - 1));
    },
  }
});
