import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['newUserForm'],
  newUserForm: true,
  search: {
    email: null,
  },
  actions: {
    addUser () {
      let data = this.get('search');
      //check if field was empty on submit
      if (this.get('search.email') !== null) {
        this.sendAction('addUser', data);
      }
      //reset form field
      this.set('search.email', null);
    },
  },
});
