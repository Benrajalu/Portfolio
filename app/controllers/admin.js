import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  status: Ember.inject.service(),
  init(){
    console.log("admin controller");
    this.send('gotoAdmin');
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
    publishPost: function() {
      var newPost = this.store.createRecord('work-entry', {
        title: this.get('title'),
        type: this.get('type'),
        subtitle: this.get('subtitle'),
        teaser: this.get('teaser'),
        logo: this.get('logo'),
        intro: this.get('intro'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      newPost.save();
    }
  }
});
