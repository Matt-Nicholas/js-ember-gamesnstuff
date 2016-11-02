import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  total: 0,

  actions: {
    calculateTotal(){
        this.get('shoppingCart').items.forEach(function(item){
        this.total += item.price;
        console.log(this.total)
      });
    }
  }
});
