import Ember from 'ember';

export default Ember.Component.extend({
  newSchedule: {
    title: null,
    day: null,
    start: null,
    end: null,
  },
  actions: {
    createSchedule () {
      let data = this.get('newSchedule');
      // data.schedule = this.get('user');
      this.sendAction('createSchedule', data);
      this.set('newSchedule.title', null);
      this.set('newSchedule.day', null);
      this.set('newSchedule.start', null);
      this.set('newSchedule.end', null);
    },
  },
});
