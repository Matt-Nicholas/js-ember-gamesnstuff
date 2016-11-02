import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),

  actions: {
    logIn() {
      var u = this.get('username');
      var p = this.get('password');
      this.get('adminControl').logIn(u,p);
    },
    logOut() {
      this.get('adminControl').logOut();
    }
  }
});
