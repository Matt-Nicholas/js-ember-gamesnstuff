import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions:{
    addToCart(game){
      this.get('shoppingCart').add(game);
      this.sendAction('sellGame', game)
    }
  }
});
