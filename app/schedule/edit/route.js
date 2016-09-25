import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('schedule', params.schedule_id);
  },
  actions: {
    saveSchedule (schedule) {
      schedule.save()
        .then(()=>this.transitionTo('schedules'));
    },
  },
});
