const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")
const consentForm = document.getElementById("consent-form")

setTimeout(function(){
    modal.style.display= "none"
},2500)

$(document).ready(function() {
    $("a[href='#Mainsection']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#mainsection").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#aboutsection']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#aboutsection").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#projectssection']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#projectssection").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#contactsection']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#contactsection").offset().top - headerHeight
      }, 10);
    });
  });