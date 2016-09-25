import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  day: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  user_id: DS.attr('string'),
});
