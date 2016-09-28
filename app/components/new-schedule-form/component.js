import Ember from 'ember';

export default Ember.Component.extend({
  weekdays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  times: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
          '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
          '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',],
  newSchedule: {
    title: null,
    day: 'Select Day',
    start: 'Start Time',
    end: 'End Time',
  },
  classNameBindings: ['newScheduleForm'],
  newScheduleForm: true,
  actions: {
    createSchedule () {
      let data = this.get('newSchedule');

      //send action if all fields are set
      if (this.get('newSchedule.title') !== null &&
          this.get('newSchedule.day') !== 'Select Day' &&
          this.get('newSchedule.start') !== 'Start Time' &&
          this.get('newSchedule.end') !== 'End Time'){
        this.sendAction('createSchedule', data);
      }

      //reset form fields
      this.set('newSchedule.title', null);
      this.set('newSchedule.day', 'Select Day');
      this.set('newSchedule.start', 'Start Time');
      this.set('newSchedule.end', 'End Time');
    },
  },
});
