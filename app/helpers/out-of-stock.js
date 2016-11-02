import Ember from 'ember';

export function outOfStock(params) {
  console.log(params.get('quantity'));
  // if(params.get('quantity') <= 0) {
  // return '<p>test<p>'
  //     // return '<img class="game-box" src="'+ params.image+'">';
  // } else {
  //   // return '<img class="game-box out-of-stock" src="'+ params.image+'">'
  // }
}

export default Ember.Helper.helper(outOfStock);
