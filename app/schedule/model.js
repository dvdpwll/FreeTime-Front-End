import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  day: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  user_id: DS.attr('string'),
  //I need these computed values to use the ember-calender add-on
  //this is to modify my exisiting database to be compatable for ember-calender
  startsAt: Ember.computed('day', 'start', function() {
    //calendar constants, i dont account for leap year
    let dayArray = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let daysInMonthArray = [31,28,31,30,31,30,31,31,30,31,30,31];

    //get curent date
    let currentTime = new Date();
    let stringTime = currentTime.toDateString();
    let split = stringTime.split(' ');

    //if current day of week is different than saved day of week
    if (split[0] !== this.get('day')) {
      //calculate difference between current day and saved day
      let start = dayArray.indexOf(this.get('day'));
      let end = dayArray.indexOf(split[0]);
      let diff = start - end;
      //save calculated date and day
      split[0] = dayArray[end + diff];
      let newDay = parseInt(split[2]) + diff;
      split[2] = newDay.toString();
    }

    //if calculated day is greater than the max of the month
    let daysMax = daysInMonthArray[monthArray.indexOf(split[1])];
    if (split[2] > daysMax) {
      let diff = split[2] - daysMax;
      //save new day
      split[2] = diff;
      //save new month
      let index = monthArray.indexOf(split[1]);
      split[1] = monthArray[index + 1];
    }

    //if calculate day is less than 0
    if (split[2] < 1) {
      let currentIndex = monthArray.indexOf(split[1]);
      let prevMonthMaxDays = daysInMonthArray[currentIndex - 1];
      //save new day
      let newDay = prevMonthMaxDays + split[2];
      console.log(newDay);
      split[2] = newDay
      //save new month
      let newMonth = monthArray[currentIndex - 1];
      console.log(newMonth);
      split[1] = newMonth;
    }
    //for easy viewing
    let weekday = split[0];
    let month = split[1];
    let day = split[2];

    return `${weekday} ${month} ${day} 2017 ${this.get('start')}:00 GMT-400 (EDT)`;
  }),
  endsAt: Ember.computed('day', 'end', function() {
    //calendar constants, i dont account for leap year
    let dayArray = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let daysInMonthArray = [31,28,31,30,31,30,31,31,30,31,30,31];

    //get curent date
    let currentTime = new Date();
    let stringTime = currentTime.toDateString();
    let split = stringTime.split(' ');

    //if current day of week is different than saved day of week
    if (split[0] !== this.get('day')) {
      //calculate difference between current day and saved day
      let start = dayArray.indexOf(this.get('day'));
      let end = dayArray.indexOf(split[0]);
      let diff = start - end;
      //save calculated date and day
      split[0] = dayArray[end + diff];
      let newDay = parseInt(split[2]) + diff;
      split[2] = newDay.toString();
    }

    //if calculated day is greater than the max of the month
    let daysMax = daysInMonthArray[monthArray.indexOf(split[1])];
    if (split[2] > daysMax) {
      let diff = split[2] - daysMax;
      //save new day
      split[2] = diff;
      //save new month
      let index = monthArray.indexOf(split[1]);
      split[1] = monthArray[index + 1];
    }

    //if calculate day is less than 0
    if (split[2] < 1) {
      let currentIndex = monthArray.indexOf(split[1]);
      let prevMonthMaxDays = daysInMonthArray[currentIndex - 1];
      //save new day
      let newDay = prevMonthMaxDays + split[2];
      console.log(newDay);
      split[2] = newDay
      //save new month
      let newMonth = monthArray[currentIndex - 1];
      console.log(newMonth);
      split[1] = newMonth;
    }
    //for easy viewing
    let weekday = split[0];
    let month = split[1];
    let day = split[2];

    return `${weekday} ${month} ${day} 2017 ${this.get('end')}:00 GMT-400 (EDT)`;
  }),
});

// currentTime = Tue Sep 27 2016 14:58:54 GMT-0400 (EDT)
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
