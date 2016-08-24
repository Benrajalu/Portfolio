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
    this.send('goToList');
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
    },
    publishPost: function() {
      var newPost = this.store.createRecord('work-entry', {
        uri: this.get('uri'),
        url: this.get('url'),
        title: this.get('title'),
        type: this.get('type'),
        subtitle: this.get('subtitle'),
        teaser: this.get('teaser'),
        logo: this.get('logo'),
        intro: this.get('intro'),
        body: this.get('body')
        rank: this.get('rank')
      });
      newPost.save();
    }
  }
});