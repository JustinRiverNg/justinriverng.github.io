document.addEventListener('DOMContentLoaded', function () {

  var contactTitleText = "Let's Connect!";
  var i = 0;
  var speed = 50;

  typeOutContactTitleText();

  function typeOutContactTitleText() {
    if (i < contactTitleText.length) {
      document.querySelector("#contact-title-text").textContent += contactTitleText.charAt(i);
      i++;
      setTimeout(typeOutContactTitleText, speed);
    }
  }

});
