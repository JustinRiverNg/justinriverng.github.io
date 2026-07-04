document.addEventListener('DOMContentLoaded', function () {

  var introText = "Hey, I'm Justin Ng. I build software and web applications.";
  var i = 0;
  var speed = 50;

  typeOutIntro();

  function typeOutIntro() {
    if (i < introText.length) {
      document.querySelector("#introduction-text").textContent += introText.charAt(i);
      i++;
      setTimeout(typeOutIntro, speed);
    }
  }

});
