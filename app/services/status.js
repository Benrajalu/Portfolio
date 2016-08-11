import Ember from 'ember';

export default Ember.Service.extend({
  toWork: false,
  toAbout: false,
  init() {
    this._super(...arguments);
    this.setProperties({'toWork': false, 'toAbout': false});
  },

  about() {
    this.setProperties({'toWork': false, 'toAbout': true});
    console.log('status: about')
  },

  work() {
    this.setProperties({'toWork': true, 'toAbout': false});
    console.log('status: work')
  },

  empty() {
    this.setProperties({'toWork': false, 'toAbout': false});
    console.log('status: empty')
  }
});
