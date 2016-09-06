import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  sortProperties: ['uri'],
  sortAscending: false, // sorts post by timestamp
  status: Ember.inject.service(),
  theList: true,
  theNew: false,
  init(){
    console.log("admin controller");
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
      this.get('status').adminList();
      console.log('status: the list');
    },
    goToNew() {
      this.get('status').adminNew();
      console.log('status: the new');
    },
    editRecord() {
      this.get('status').adminEdit();
    },
    gotoEdit(){
      console.log('working');
      this.get('status').adminEdit();
    },
    deleteRecord(post){
      var store = this.get('store');
      if(confirm('Are you really really sure?')){
        store.findRecord('work-entry', post, { backgroundReload: false }).then(function(post) {
          post.destroyRecord(); // => DELETE to /posts/2
        });
      }
    }
  },
  sortedWorks: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['rank'],
});

