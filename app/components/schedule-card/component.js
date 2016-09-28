import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['scheduleCard'],
  scheduleCard: true,
  actions: {
    edit () {
      this.sendAction('edit', this.get('schedule'));
    },
    delete () {
      this.sendAction('delete', this.get('schedule'));
    },
  },
});
