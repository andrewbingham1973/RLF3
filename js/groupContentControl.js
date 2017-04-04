function getStepsMenu(screenNum) {

  console.log("get steps menu");
  $.get('groupContent/stepsMenu.html', function(data) {
    //inject the content into the DOM
    animateHeader('animateUp', '');
    $(".contentRoot").append(data);
    swiper.slideTo(screenNum, 1500);

  }); //end get
}


//Glossary content
function getGlossaryContent(_toNum, _fromNum) {


  animateHeader('animateUpNoLogo', '');

  console.log("From Num: " + _fromNum);

  $.get('groupContent/glossary.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(_toNum, 1500, true);

    $(".fromNum").attr("_fromNum", _fromNum);

  }); //end get

  animateHeader('animateDown', 'Glossary of Terms');

} //close function




//Step 1 content
function getStep1Content(screenNum) {

  console.log("try injecting content");

  $.get('groupContent/Step1Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);

  }); //end get

  animateHeader('animateDown', '01 - Before You Begin');

} //close function





//Step 2 content
function getStep2Content(screenNum) {

  $.get('groupContent/Step2Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);

  }); //end get

  animateHeader('animateDown', '02 - Getting To Grips With The Task');

} //close function



//Step 3 content
function getStep3Content(screenNum) {

  $.get('groupContent/Step3Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '03 - Brainstorming');

} //close function




//Step 4 content
function getStep4Content(screenNum) {

  $.get('groupContent/Step4Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '04 - Parts of your essay');

} //close function



//Step 5 content
function getStep5Content(screenNum) {

  $.get('groupContent/Step5Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '05 - Now you can read');

} //close function



//Step 6 content
function getStep6Content(screenNum) {

  $.get('groupContent/Step6Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '06 - Balance');

} //close function

//Step 7 content
function getStep7Content(screenNum) {

  $.get('groupContent/Step7Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '07 - Close reading');

} //close function



//Step 8 content
function getStep8Content(screenNum) {

  $.get('groupContent/Step8Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '08 - Giving your material order');

} //close function


//Step 9 content
function getStep9Content(screenNum) {

  $.get('groupContent/Step9Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '09 - Write, repeat');

} //close function



//Step 10 content
function getStep10Content(screenNum) {

  $.get('groupContent/Step10Content.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);

    swiper.slideTo(screenNum, 1500, true);


  }); //end get

  animateHeader('animateDown', '10 - Revising');

} //close function








function animateHeader(operation, headerTitle) {

  var operation;
  var headerTitle;

  if (operation == "animateDown") {

    //$(".fixedHeader").children().hide();
    $(".headerTitle").empty();
    $(".eptmainLogo").hide();
    $(".rightButtons").hide();
    $(".fixedHeader").delay(200).show().animate({
      opacity: 1,
      height: "100px"
    }, 'fast', 'linear');

    setTimeout(function() {
      $(".headerTitle").append("<h3>" + headerTitle + "</h3>");
    }, 800);

  }

  if (operation == "animateUp") {

    //$(".fixedHeader").children().hide();
    $(".headerTitle").empty();

    $(".fixedHeader").delay(200).show().animate({
      opacity: 1,
      height: "50px"
    }, 'fast', 'linear');

    setTimeout(function() {
      $(".eptmainLogo").show();
      $(".rightButtons").show();
    }, 800);

  }


  if (operation == "animateUpNoLogo") {

    //$(".fixedHeader").children().hide();
    $(".headerTitle").empty();

    $(".fixedHeader").delay(300).show().animate({
      opacity: 1,
      height: "80px"
    }, 'slow', 'linear');

    setTimeout(function() {
      $(".eptmainLogo").hide();
      $(".rightButtons").hide();
    }, 1300);

  }



}
