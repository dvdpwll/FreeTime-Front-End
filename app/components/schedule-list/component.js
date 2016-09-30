import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['scheduleHidden'],
  scheduleHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('scheduleHidden');
    },
  },
});
