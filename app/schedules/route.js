import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('schedule');
  },
  actions: {
    createSchedule (data) {
      let schedule = this.get('store').createRecord('schedule', data);
      schedule.save();
    },
  },
});
