//getStepsMenu();
changeAppPage("stepsmenuinit", "0");

$(".navBack").css("visibility", "hidden");



(function($){
  $(function(){


 $('.modal-trigger').leanModal();
//initialise main menu on start

$('select').material_select();
$('.button-collapse').sideNav();
    //$('.button-collapse').collapsible();
    //$('.button-collapse').sideNav('show');

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
