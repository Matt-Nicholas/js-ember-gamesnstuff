import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,
  actions: {
    updateGameForm() {
      this.set('updateGameForm', true);
    },
    update(game) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        genre: this.get('genre'),
        quantity: this.get('quantity'),
        condition: this.get('condition')
      };
      this.set('updateGameForm', false);
      this.sendAction('update', game, params);
    },

    delete(game) {
      if (confirm("Are you positive?")) {
        this.sendAction('destroyRecord', game);
      }
    }
  }

});
