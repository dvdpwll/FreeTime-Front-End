import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['scheduleHidden'],
  scheduleHidden: true,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('scheduleHidden');
    },
  },
});
