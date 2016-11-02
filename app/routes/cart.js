import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model() {
    var total = 0;
    this.get('shoppingCart').items.forEach(function(item) {
       total += item.get('price');
      });
    return total;
  }
});
