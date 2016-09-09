import Ember from 'ember';

export default Ember.Component.extend({
  status: Ember.inject.service(),
  actions: {
    togglePanel : function(){
      this.toggleProperty('contactShown');
    }
  }
});
