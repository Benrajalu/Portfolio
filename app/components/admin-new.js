import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sortProperties: ['uri'],
  sortAscending: false, // sorts post by timestamp
  didInsertElement: function(){
    $('.post-publish').parsley({
      errorClass: 'has-error',
      successClass: 'has-success',
      classHandler: function(el) {
        return el.$element.closest("fieldset");
      },
      errorsWrapper: '<span class="help-block">',
      errorTemplate: '<div></div>'
    });
  },
  actions: {
    publishPost: function() {
      if(this.get('uri') && this.get('url') && this.get('title') && this.get('type') && this.get('subtitle') && this.get('teaser') && this.get('logo') && this.get('intro') && this.get('body') && this.get('rank')){
        var store = this.get('store');
        var newPost = store.createRecord('work-entry', {
          uri: this.get('uri'),
          url: this.get('url'),
          title: this.get('title'),
          type: this.get('type'),
          subtitle: this.get('subtitle'),
          teaser: this.get('teaser'),
          logo: this.get('logo'),
          intro: this.get('intro'),
          body: this.get('body'),
          rank: this.get('rank')
        });
        newPost.save();
      }
      else{
        var button = document.getElementById('submit');
        button.innerHTML= 'Please fill out all the fields';
      }
    }
  },
  options:{
    height: 200,
    inline: false,
    force_br_newlines: false,
    force_p_newlines: true,
    forced_root_block: '',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste imagetools"
    ],
    toolbar: "undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    body_class: 'tinyMCE-editor',
    content_css : './assets/portfolio.css'
  }
});
