import Ember from 'ember';

export default Ember.Component.extend({
  status: Ember.inject.service(),
  didInsertElement(){
    var element = $('#main-nav'),
        toTop = $('#toTop');
    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;
      if(currentScroll > 80){
        $(element).addClass('collapsed');
      }
      else{
        $(element).removeClass('collapsed');
      }
    });
    $(toTop).click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 400);
    });
  },
  actions:{
    // Bubbling menu opening action from nav-bar component
    gotoWork(){
       this.get('status').work();
    },
    gotoAbout(){
      this.get('status').about();
    },
    gotoHome(){
      this.get('status').empty();
    },
    gotoEdit(){
      console.log('working');
      this.get('status').adminEdit();
    },
  }
});
