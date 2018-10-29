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
  var $sectionOneButtonHeader = $("#section-1-button-header");
  var $sectionOneButtonScroll = $("#section-1-button-scroll");

  var $thumbnailButton = $(".thumbnail-button");

  var $workMenuPhotographyButton = $("#work-menu-photography-button");
  var $workMenuPhotography = $("#work-menu-photography");
  var $workMenuDesignButton = $("#work-menu-design-button");
  var $workMenuDesign = $("#work-menu-design");
  var $workMenuPrintButton = $("#work-menu-print-button");
  var $workMenuPrint = $("#work-menu-print");
  var $workExRowTop = $(".work-ex-row-top");
  var $workExRowBottom = $(".work-ex-row-bottom");
  var $viewMoreWorkButton = $("#view-more-work-button");

  var $testimonialArrowLeft = $("#testimonial-arrow-left");
  var $testimonialArrowRight = $("#testimonial-arrow-right");
  var $testimonialBody = $("#testimonial-body");
  var $testimonialBodyGhost = $("#testimonial-body-ghost");
  var $testimonialClientName = $("#testimonial-client-name");
  var $testimonialClientNameGhost = $("#testimonial-client-name-ghost");
  var $testimonialClientTitle = $("#testimonial-client-title");
  var $testimonialClientTitleGhost = $("#testimonial-client-title-ghost");

  var $seeAllClientsButton = $("#see-all-clients-button");

  var $teamWorkWithUsButton = $("#team-work-with-us-button");


  var workTypeButtonActive = "photography";

  var testimonialClient = "clientOne";
  var suspendCrossFade = false;


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


  function swapTestimonials() {
    suspendCrossFade = true;

    if(testimonialClient === "clientOne") {
      $testimonialBody.addClass("testimonial-fade-out");
      $testimonialClientName.addClass("testimonial-fade-out");
      $testimonialClientTitle.addClass("testimonial-fade-out");

      $testimonialBodyGhost.removeClass("testimonial-fade-out")
      $testimonialBodyGhost.addClass("testimonial-fade-in");
      $testimonialClientNameGhost.removeClass("testimonial-fade-out")
      $testimonialClientNameGhost.addClass("testimonial-fade-in");
      $testimonialClientTitleGhost.removeClass("testimonial-fade-out")
      $testimonialClientTitleGhost.addClass("testimonial-fade-in");

      testimonialClient = "clientTwo";
    }
    else if(testimonialClient === "clientTwo") {
      $testimonialBodyGhost.addClass("testimonial-fade-out");
      $testimonialClientNameGhost.addClass("testimonial-fade-out");
      $testimonialClientTitleGhost.addClass("testimonial-fade-out");

      $testimonialBody.removeClass("testimonial-fade-out");
      $testimonialBody.addClass("testimonial-fade-in");
      $testimonialClientName.removeClass("testimonial-fade-out");
      $testimonialClientName.addClass("testimonial-fade-in");
      $testimonialClientTitle.removeClass("testimonial-fade-out");
      $testimonialClientTitle.addClass("testimonial-fade-in");

      testimonialClient = "clientOne";
    }

    setTimeout(function() {
      suspendCrossFade = false;
    }, 600);
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


  $sectionOneButtonHeader.mouseenter(function() {
    $(this).addClass("button-main-hover");
  });
  $sectionOneButtonHeader.mouseleave(function() {
    $(this).removeClass("button-main-hover");
    $(this).removeClass("button-main-active");
  });

  $sectionOneButtonHeader.mousedown(function() {
    $(this).addClass("button-main-active");
  });
  $sectionOneButtonHeader.mouseup(function() {
    $(this).removeClass("button-main-active");
  });


/* ---------------- SECTION 2 CONTAINER ---------------- */
  $thumbnailButton.mouseenter(function() {
    $(this).addClass("button-sub-hover");
  });
  $thumbnailButton.mouseleave(function() {
    $(this).removeClass("button-sub-hover");
    $(this).removeClass("button-sub-active");
  });

  $thumbnailButton.mousedown(function() {
    $(this).addClass("button-sub-active");
  });
  $thumbnailButton.mouseup(function() {
    $(this).removeClass("button-sub-active");
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


  $workExRowTop.mouseenter(function() {
    $(this).addClass("work-ex-hover");
  });
  $workExRowTop.mouseleave(function() {
    $(this).removeClass("work-ex-hover");
    $(this).removeClass("work-ex-active");
  });

  $workExRowTop.mousedown(function() {
    $(this).addClass("work-ex-active");
  });
  $workExRowTop.mouseup(function() {
    $(this).removeClass("work-ex-active");
  });


  $workExRowBottom.mouseenter(function() {
    $(this).addClass("work-ex-hover");
  });
  $workExRowBottom.mouseleave(function() {
    $(this).removeClass("work-ex-hover");
    $(this).removeClass("work-ex-active");
  });

  $workExRowBottom.mousedown(function() {
    $(this).addClass("work-ex-active");
  });
  $workExRowBottom.mouseup(function() {
    $(this).removeClass("work-ex-active");
  });


  $viewMoreWorkButton.mouseenter(function() {
    $(this).addClass("button-main-hover");
  });
  $viewMoreWorkButton.mouseleave(function() {
    $(this).removeClass("button-main-hover");
    $(this).removeClass("button-main-active");
  });

  $viewMoreWorkButton.mousedown(function() {
    $(this).addClass("button-main-active");
  });
  $viewMoreWorkButton.mouseup(function() {
    $(this).removeClass("button-main-active");
  });


/* ---------------- SECTION 4 CONTAINER ---------------- */
  $testimonialArrowLeft.mouseenter(function() {
    $(this).addClass("testimonial-arrow-hover");
  });
  $testimonialArrowLeft.mouseleave(function() {
    $(this).removeClass("testimonial-arrow-hover");
    $(this).removeClass("testimonial-arrow-active");
  });

  $testimonialArrowLeft.mousedown(function() {
    $(this).addClass("testimonial-arrow-active");
  });
  $testimonialArrowLeft.mouseup(function() {
    $(this).removeClass("testimonial-arrow-active");
  });

  $testimonialArrowLeft.on("click", function() {
    if(suspendCrossFade === false) {
      swapTestimonials();
    }
  });


  $testimonialArrowRight.mouseenter(function() {
    $(this).addClass("testimonial-arrow-hover");
  });
  $testimonialArrowRight.mouseleave(function() {
    $(this).removeClass("testimonial-arrow-hover");
    $(this).removeClass("testimonial-arrow-active");
  });

  $testimonialArrowRight.mousedown(function() {
    $(this).addClass("testimonial-arrow-active");
  });
  $testimonialArrowRight.mouseup(function() {
    $(this).removeClass("testimonial-arrow-active");
  });

  $testimonialArrowRight.on("click", function() {
    if(suspendCrossFade === false) {
      swapTestimonials();
    }
  });


/* ---------------- SECTION 5 CONTAINER ---------------- */
  $seeAllClientsButton.mouseenter(function() {
    $(this).addClass("button-main-hover");
  });
  $seeAllClientsButton.mouseleave(function() {
    $(this).removeClass("button-main-hover");
    $(this).removeClass("button-main-active");
  });

  $seeAllClientsButton.mousedown(function() {
    $(this).addClass("button-main-active");
  });
  $seeAllClientsButton.mouseup(function() {
    $(this).removeClass("button-main-active");
  });


/* ---------------- SECTION 6 CONTAINER ---------------- */
  $teamWorkWithUsButton.mouseenter(function() {
    $(this).addClass("button-main-hover");
  });
  $teamWorkWithUsButton.mouseleave(function() {
    $(this).removeClass("button-main-hover");
    $(this).removeClass("button-main-active");
  });

  $teamWorkWithUsButton.mousedown(function() {
    $(this).addClass("button-main-active");
  });
  $teamWorkWithUsButton.mouseup(function() {
    $(this).removeClass("button-main-active");
  });

});
