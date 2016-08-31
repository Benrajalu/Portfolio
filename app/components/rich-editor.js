import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    this.$('.rich-editor').redactor();
  }
});
