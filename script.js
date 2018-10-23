$(document).ready(function() {

/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
  var $selectionHome = $("#selection-home");
  var $selectionWhatWeDo = $("#selection-what-we-do");
  var $selectionTestimonial = $("#selection-testimonial");
  var $selectionContact = $("#selection-contact");

  var $menuHome = $("#menu-home");
  var $menuWhatWeDo = $("#menu-what-we-do");
  var $menuTestimonial = $("#menu-testimonial");
  var $menuContact = $("#menu-contact");

/* ------------------------- FUNCTION DECLARATIONS ------------------------- */


/* ---------------------------- EVENT HANDLERS ---------------------------- */

  $menuHome.mouseenter(function() {
    $selectionHome.removeClass("hidden");

    $selectionWhatWeDo.addClass("hidden");
    $selectionTestimonial.addClass("hidden");
    $selectionContact.addClass("hidden");
  });


  $menuWhatWeDo.mouseenter(function() {
    $selectionWhatWeDo.removeClass("hidden");

    $selectionHome.addClass("hidden");
    $selectionTestimonial.addClass("hidden");
    $selectionContact.addClass("hidden");
  });


  $menuTestimonial.mouseenter(function() {
    $selectionTestimonial.removeClass("hidden");

    $selectionHome.addClass("hidden");
    $selectionWhatWeDo.addClass("hidden");
    $selectionContact.addClass("hidden");
  });


  $menuContact.mouseenter(function() {
    $selectionContact.removeClass("hidden");

    $selectionHome.addClass("hidden");
    $selectionWhatWeDo.addClass("hidden");
    $selectionTestimonial.addClass("hidden");
  });


});
