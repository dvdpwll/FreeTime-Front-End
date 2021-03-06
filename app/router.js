import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('schedules');
  this.route('schedule/edit', { path: 'schedules/:schedule_id/edit' });
  this.route('calendar');
});

export default Router;
