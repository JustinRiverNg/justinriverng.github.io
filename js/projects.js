document.addEventListener('DOMContentLoaded', function () {

  var projectsTitleText = "Featured Projects";
  var i = 0;
  var speed = 50;

  typeOutProjectsTitle();

  function typeOutProjectsTitle() {
    if (i < projectsTitleText.length) {
      document.querySelector("#projects-title-text").textContent += projectsTitleText.charAt(i);
      i++;
      setTimeout(typeOutProjectsTitle, speed);
    }
  }

});
