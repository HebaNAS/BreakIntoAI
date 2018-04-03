function animate(Reveal, TweenMax) {
  var data = document.getElementById('data-animation');
  var performance = document.getElementById('performance-animation');
  var experience = document.getElementById('experience-animation');

  console.log(Reveal.slide('15'));

  TweenMax.fromTo(data, 1, {
    immediateRender:false,
    opacity: 0,
    left: 0,
  }, {
    opacity: 1,
    left: 70
  });
}