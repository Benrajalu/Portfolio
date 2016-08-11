export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('work'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('work'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
};