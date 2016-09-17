import Ember from 'ember';

export default Ember.Service.extend({
  toWork: false,
  toAbout: false,
  toHome: false,
  toAdmin: false,
  init() {
    this._super(...arguments);
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': false});
  },
  about() {
    this.setProperties({'toWork': false, 'toAbout': true, 'toHome': false, 'toAdmin': false});
    console.log('status: about');
  },
  work() {
    this.setProperties({'toWork': true, 'toAbout': false, 'toHome': false, 'toAdmin': false});
    console.log('status: work');
  },
  admin() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': true});
    console.log('status: admin');
  },
  adminEdit() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': true, 'edit' : true, 'list': false, 'new': false});
    console.log('status: admin edit');
  },
  adminNew() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': true, 'edit' : false, 'list': false, 'new': true});
    console.log('status: admin new');
  },
  adminLog() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': true, 'edit' : false, 'list': false, 'new': false});
    console.log('status: admin login');
  },
  adminList() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': false, 'toAdmin': true, 'edit' : false, 'list': true, 'new': false});
    console.log('status: admin list');
  },
  empty() {
    this.setProperties({'toWork': false, 'toAbout': false, 'toHome': true, 'toAdmin': false});
    console.log('status: empty');
  }
});
