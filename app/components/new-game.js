import Ember from 'ember';

export default Ember.Component.extend({
  newGameForm: false,
  actions: {
    newGameForm() {
      this.set('newGameForm', true);
    },
    saveGame() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: parseInt(this.get('price')),
        genre: this.get('genre'),
        quantity: parseInt(this.get('quantity')),
        condition: this.get('condition'),
        image: "http://lorempixel.com/200/300/cats",
      };
      this.set('newGameForm', false);
      this.sendAction('saveGame', params);
    },
  }
});
