import Ember from 'ember';

var current;

export default Ember.Route.extend({
  model(params) {
    current = params;
    return this.get('store').query('work-entry', { orderBy: 'uri', equalTo: params.uri });
  },
  activate() {
    this.get('store').query('work-entry', { orderBy: 'uri', equalTo: current.uri }).then(function(entry){
      var title = entry.content[0]['_data'].title;
      document.title = "Benoit Rajalu - " + title.replace(/<\/?[^>]+(>|$)/g, "") + " - Portfolio Développeur front-end";
    });
  }
});
