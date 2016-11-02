import Ember from 'ember';

export default Ember.Service.extend({
  username: 'Admin',
  password: 'Password',

  loggedIn: false,

  logIn(u,p) {
    if((this.get('username') === u) && (this.get('password') === p)) {
      this.set('loggedIn', true);
    } else {
      alert("Incorrect Login Information. GTFO");
    }
  },

  logOut() {
    this.set('loggedIn', false);
  }
});
