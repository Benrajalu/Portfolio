import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  store: Ember.inject.service(),
  init(){
    this.send('goToEdit');
  },
  actions:{
    goToEdit:function(){
      this.get('status').adminEdit();
    },
    updatePost:function(id){
      var button = document.getElementById('submit');
      button.innerHTML= 'Updating...';
      var store = this.get('store');
      store.findRecord('work-entry', id).then(function(entry) {
        entry.save().then(function() {
          button.innerHTML= 'Update again';
        }, function() {
          button.innerHTML= "Well it's a dud";
        });
      });
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
    content_css : '/assets/portfolio.css'
  }
});
