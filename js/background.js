document.addEventListener('DOMContentLoaded', function () {

  var experienceTitleText = "Previous Experience";
  var i = 0;
  var speed = 50;

  typeOutExperienceTitle();

  function typeOutExperienceTitle() {
    if (i < experienceTitleText.length) {
      document.querySelector("#experience-title-text").textContent += experienceTitleText.charAt(i);
      i++;
      setTimeout(typeOutExperienceTitle, speed);
    }
  }

  var educationTitleText = "Where I Studied";
  var j = 0;

  typeOutEducationTitle();

  function typeOutEducationTitle() {
    if (j < educationTitleText.length) {
      document.querySelector("#education-title-text").textContent += educationTitleText.charAt(j);
      j++;
      setTimeout(typeOutEducationTitle, speed);
    }
  }

});
