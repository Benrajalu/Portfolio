import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  init(){
    console.log("home controller");
    this.send('gotoHome');
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
