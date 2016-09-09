import DS from 'ember-data';

export default DS.Model.extend({
  uri: DS.attr('string'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  type: DS.attr('string'),
  subtitle: DS.attr('string'),
  teaser: DS.attr('string'),
  logo: DS.attr('string'),
  intro: DS.attr('string'),
  body: DS.attr('string'),
  category: DS.attr('string'),
  rank: DS.attr('string')
});


/*var newPost = this.store.createRecord('work-entry', {
  title: 'Sugar First',
  type: 'Thème Wordpress responsive',
  subtitle: 'Amour du sucre',
  teaser: '/images/teasers/sugarfirst.jpg',
  intro: '<p>La régie publicitaire du Groupe Marie Claire produit de très nombreux espaces dédiés à ses divers annonceurs. Ceux-ci cherchent au travers de ces sites dédiés à informer et à séduire un public web exigeant.</p><p>Ma responsabilité est de fournir une intégration (dans un environnement Silex) qui correspond autant aux attentes des visiteurs qu’aux maquettes maintes fois validées en amont.</p>',
  body: 'Test body',
});
newPost.save();*/
