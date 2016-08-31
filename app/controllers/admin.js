import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['uri'],
  sortAscending: false, // sorts post by timestamp
  status: Ember.inject.service(),
  theList: true,
  theNew: false,
  init(){
    console.log("admin controller");
    this.send('gotoAdmin');
    this.send('goToNew');
  },
  actions:{
    gotoWork(){
      this.get('status').work();
    },
    gotoAbout(){
      this.get('status').about();
    },
    gotoHome(){
      this.get('status').empty();
    },
    gotoAdmin(){
      this.get('status').admin();
    },
    goToList() {
      this.setProperties({'theList': true, 'theNew': false});
      console.log('status: the list');
    },
    goToNew() {
      this.setProperties({'theList': false, 'theNew': true});
      console.log('status: the new');
    }
  }
});

