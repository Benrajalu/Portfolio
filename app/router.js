import Ember from 'ember';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('work');
  this.route('view-work', { path: 'work/:uri' });
  this.route('new-work');
  this.authenticatedRoute('admin', function() {
    this.route('edit-work', { path: 'edit/:uri' });
  });
  this.route('login');
  this.route('loading');
});

export default Router;
