import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  init(){
    console.log("application controller");
  },
  actions:{
    // Bubbling menu opening action from nav-bar component
    gotoWork(){
       this.get('status').work();
    },
    gotoAbout(){
      this.get('status').about();
    },
    gotoHome(){
      this.get('status').empty();
    },
    gotoEdit(){
      console.log('working');
      this.get('status').adminEdit();
    },
  }
});
