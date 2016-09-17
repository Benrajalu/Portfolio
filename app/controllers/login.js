import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  init(){
    this.send('goToNew');
  },
  actions: {
    login: function(provider) {
      var scope = this;
      if(!this.userEmail || !this.userPassword){
        this.setProperties({'errorMessage' : "Fill the blanks, asshat"});
      }
      this.get('session').open('firebase', {
        provider: provider,
        email: this.userEmail,
        password: this.userPassword
      }).then(function(data) {
        console.log(data.currentUser);
        scope.transitionToRoute('admin');
      }, function(reason) {
        console.log(reason.message);
        scope.setProperties({'errorMessage' : reason.message});
      });
    },
    goToNew() {
      this.get('status').adminLog();
    }
  }
});
