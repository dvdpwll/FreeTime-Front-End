import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      this.sendAction('edit', this.get('schedule'));
    },
    delete () {
      this.sendAction('delete', this.get('schedule'));
    },
  },
});
