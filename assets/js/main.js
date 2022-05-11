$(document).ready(function () {
  $('.sandwich-wrapper').click(function () {
    $('.navbar-wrapper').fadeToggle(400);
  });
});

const desktopHeader = window.matchMedia('(min-width: 969px)')

function desktopChange(e) {
  if (e.matches) {
    $('.navbar-wrapper').removeAttr("style")
  }
}


desktopHeader.addListener(desktopChange)


function directOurHistory() {
  window.location.href = 'OurHistory.html';
}
function directGallery() {
  window.location.href = 'Gallery.html';
}


function directMenu() {
  window.location.href = 'Menu.html';
}

function directLocation() {
  window.location.href = 'Location.html';
}
function directContactUs() {
  window.location.href = 'ContactUs.html';
}

$(function () {
  var slides = $('.mySlides')
  slides.hide()

  var currIndex = 0;
  var minIndex = 0;
  var maxIndex = slides.length - 1;

  slides.eq(0).show()
  $('.prev').click(() => {
    slides.eq(currIndex).animate({
      width: "toggle"
    })

    currIndex -= 1
    if (currIndex < minIndex) {
      currIndex = maxIndex
    }
    slides.eq(currIndex).animate({
      width: "toggle"
    })
  })

  $('.next').click(() => {
    slides.eq(currIndex).animate({
      width: "toggle"
    })

    currIndex += 1

    if (currIndex > maxIndex) {
      currIndex = minIndex
    }

    slides.eq(currIndex).animate({
      width: "toggle"
    })
  })
})

function validate() {
  var name = document.forms['contact']['name'].value
  var email = document.forms['contact']['email'].value
  var gender = document.forms['contact']['gender'].value
  var location = document.forms['contact']['location'].value
  var visited = document.forms['contact']['visited'].value
  var message = document.forms['contact']['message'].value
  var newsletter_subs = document.forms['contact']['newsletter'].value

  var invalid = false;

  if (name == "") {
    document.getElementById('name-error').style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById('name-error').style.display = "none";
  }


  if (email == "") {
    document.getElementById("email-error1").style.display = "block";
    document.getElementById("email-error2").style.display = "none";
    invalid = true;
  }
  else if ((!(email.includes("@") && email.includes(".")) || email.length < 6)) {
    document.getElementById("email-error1").style.display = "none";
    document.getElementById("email-error2").style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById("email-error1").style.display = "none";
    document.getElementById("email-error2").style.display = "none";
  }



  if (gender == "") {
    document.getElementById("gender-error").style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById("gender-error").style.display = "none";
  }

  if (location == "") {
    document.getElementById("location-error").style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById("location-error").style.display = "none";
  }

  if (visited == "") {
    document.getElementById("visited-error").style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById("visited-error").style.display = "none";
  }


  if (message == "") {
    document.getElementById("message-error").style.display = "block";
    invalid = true;
  }
  else {
    document.getElementById("message-error").style.display = "none";
  }


  if (invalid == true) {
    alert("Please input the form correctly!")
  }
  else {
    alert("form has been sent!")
  }
}





