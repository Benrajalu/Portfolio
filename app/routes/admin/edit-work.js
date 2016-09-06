import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('work-entry', { orderBy: 'uri', equalTo: params.uri });
  }
});
