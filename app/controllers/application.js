import Ember from 'ember';

export default Ember.Controller.extend({
  status: Ember.inject.service(),
  init(){
    console.log("application controller");
    var timer = 350,
        scope = this;

    scope.paperRock = 3;
    scope.className = 'stay';

    function rockPapers(timer, loop){
      if(loop > 0){
        scope.set('paperRock', loop);
        scope.set('className', 'stay');
        loop -= 1;
        timer = 350;
      }
      else{
        var pick = ['<i class="fa fa-hand-rock-o"></i>', '<i class="fa fa-hand-paper-o"></i>', '<i class="fa fa-hand-scissors-o"></i>'],
            random =  Math.floor(Math.random() * (2 - 0 + 1)) + 0,
            timer = 1000;
            loop = 3;
        scope.set('paperRock', pick[random]);
        scope.set('className', 'go');
      }
      setTimeout(function(){
        rockPapers(timer, loop);
      }, timer);
    };

    rockPapers(timer, scope.paperRock);
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
