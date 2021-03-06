import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  quantity: DS.attr(),
  condition: DS.attr(),
  genre: DS.attr(),
  image: DS.attr()
});
