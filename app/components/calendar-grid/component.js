import Ember from 'ember';

export default Ember.Component.extend({
  // occurrences: Ember.A(),

  actions: {
    calendarAddOccurrence: function(occurrence) {
      console.log(occurrence);
      this.get('occurrences').pushObject(Ember.Object.create({
        title: occurrence.get('title'),
        startsAt: occurrence.get('startsAt'),
        endsAt: occurrence.get('endsAt')
      }));
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      // occurrence.setProperties(properties);
    },

    calendarRemoveOccurrence: function(occurrence) {
      // this.get('occurrences').removeObject(occurrence);
    }
  },
});
