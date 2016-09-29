import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('schedule');
  },
  actions: {
    addUser (search) {
      console.log('calendar/route.js');
      console.log(search);

    },
  },
});
