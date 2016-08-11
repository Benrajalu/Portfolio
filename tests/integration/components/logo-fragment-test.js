import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('logo-fragment', 'Integration | Component | logo fragment', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{logo-fragment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#logo-fragment}}
      template block text
    {{/logo-fragment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
