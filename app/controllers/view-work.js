import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  init(){
    console.log("view-work controller");
    this.send('gotoWork');
    document.title = "Benoit Rajalu - Mon travail - Portfolio";
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
  }
});
