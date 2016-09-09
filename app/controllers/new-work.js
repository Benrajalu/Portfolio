import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('work-entry', {
        title: this.get('title'),
        type: this.get('type'),
        subtitle: this.get('subtitle'),
        teaser: this.get('teaser'),
        logo: this.get('logo'),
        intro: this.get('intro'),
        body: this.get('body'),
        category: this.get('category'),
        timestamp: new Date().getTime()
      });
      newPost.save();
    }
  }
});
