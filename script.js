$(document).ready(function() {

/* ------------------------- VARIABLE DECLARATIONS ------------------------- */

  var $menuHome = $("#menu-home");
  var $selectionHome = $("#selection-home");
  var $menuWhatWeDo = $("#menu-what-we-do");
  var $selectionWhatWeDo = $("#selection-what-we-do");
  var $menuTestimonial = $("#menu-testimonial");
  var $selectionTestimonial = $("#selection-testimonial");
  var $menuContact = $("#menu-contact");
  var $selectionContact = $("#selection-contact");

  var $workMenuPhotographyButton = $("#work-menu-photography-button");
  var $workMenuPhotography = $("#work-menu-photography");
  var $workMenuDesignButton = $("#work-menu-design-button");
  var $workMenuDesign = $("#work-menu-design");
  var $workMenuPrintButton = $("#work-menu-print-button");
  var $workMenuPrint = $("#work-menu-print");


  workTypeButtonActive = "photography";


/* ------------------------- FUNCTION DECLARATIONS ------------------------- */

  function workTypeButtonSwap() {
    if(workTypeButtonActive === "photography") {
      $workMenuPhotographyButton.css("background-color", "rgb(43, 155, 43)");
      $workMenuPhotography.css("color", "rgb(255, 255, 255)");

      $workMenuDesignButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuDesign.css("color", "rgb(43, 155, 43)");

      $workMenuPrintButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuPrint.css("color", "rgb(43, 155, 43)");
    }

    else if(workTypeButtonActive === "design") {
      $workMenuDesignButton.css("background-color", "rgb(43, 155, 43)");
      $workMenuDesign.css("color", "rgb(255, 255, 255)");

      $workMenuPhotographyButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuPhotography.css("color", "rgb(43, 155, 43)");

      $workMenuPrintButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuPrint.css("color", "rgb(43, 155, 43)");
    }

    else if(workTypeButtonActive === "print") {
      $workMenuPrintButton.css("background-color", "rgb(43, 155, 43)");
      $workMenuPrint.css("color", "rgb(255, 255, 255)");

      $workMenuPhotographyButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuPhotography.css("color", "rgb(43, 155, 43)");

      $workMenuDesignButton.css("background-color", "rgb(255, 255, 255)");
      $workMenuDesign.css("color", "rgb(43, 155, 43)");
    }
  }


/* ---------------------------- EVENT HANDLERS ---------------------------- */

/* ---------------- SECTION 1 CONTAINER ---------------- */
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


/* ---------------- SECTION 3 CONTAINER ---------------- */
  $workMenuPhotographyButton.on("click", function() {
    workTypeButtonActive = "photography";

    workTypeButtonSwap();
  });

  $workMenuPhotography.on("click", function() {
    workTypeButtonActive = "photography";

    workTypeButtonSwap();
  });


  $workMenuDesignButton.on("click", function() {
    workTypeButtonActive = "design";

    workTypeButtonSwap();
  });

  $workMenuDesign.on("click", function() {
    workTypeButtonActive = "design";

    workTypeButtonSwap();
  });


  $workMenuPrintButton.on("click", function() {
    workTypeButtonActive = "print";

    workTypeButtonSwap();
  });

  $workMenuPrint.on("click", function() {
    workTypeButtonActive = "print";

    workTypeButtonSwap();
  });


});
