import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    accessDenied: function() {
      this.transitionTo('login');
    },
    didTransition : function() {
      setTimeout(function(){
        var loader = document.getElementById('loader');
        console.log(loader);
        $(loader).hide(550);
      }, 2500);
    }
  }
});
