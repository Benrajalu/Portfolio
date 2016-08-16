import Ember from 'ember';

export default Ember.Service.extend({
  toWork: false,
  toAbout: false,
  toHome: false, 
  init() {
    this._super(...arguments);
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false});
  },

  about() {
    this.setProperties({'toWork': false, 'toAbout': true, 'toHome': false});
    console.log('status: about');
  },

  work() {
    this.setProperties({'toWork': true, 'toAbout': false, 'toHome': false});
    console.log('status: work');
  },

  empty() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': true});
    console.log('status: empty');
  }
});
