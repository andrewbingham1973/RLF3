//Event Listener for previous screen button press
$('.navBack').click(function() {

  history.back();
    //track steps content position screen num
    var _fromNum = $(".fromNum").attr("_fromNum");

    //track main menu position screen num
    //var _mainMenuScreen = $(".mainMenuScreen").attr("_mainmenuscreen");
    var _mainMenuScreen = localStorage.getItem('RLFhistory_mainmenuscreen');

    //Only grab the current location.hash on change of url -- use onhashchange  (onpopstate not supported cross browser)
    window.onhashchange = function() {





        var hashValue = location.hash;
        //we don't pass the # char - just return the value after the #
        hashValue = hashValue.replace(/^#/, '');
        if (_mainMenuScreen !== "") {

            //alert("back button pressed, tracking pos of main menu: "+_mainMenuScreen);
            changeAppPage('stepsmenu', _mainMenuScreen);

        } else if (_fromNum === "") {
            //if (_fromNum === "" || _fromNum === undefined) {




            changeAppPage('stepsmenu', null);





        } else {
            animateHeader('animateUpNoLogo', '');
            swiper.slideTo(0, 1000, true);

            setTimeout(function() {
                    changeAppPage(currentStep, null);
                },
                1000);



        }
    };





    //animateHeader('animateUp', '');

    //alert("Current Screen Num:"+_fromNum);


});


function navHashHistory(saveHash) {
    //Hash Hijack Method for SPA
    //for each new SPA partial view, add the hash to the URL bar
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if (hashValue != saveHash) {
        window.history.pushState("", "", "#" + saveHash);
    } else {
        //Must be first initialise
        window.history.pushState("", "", "#" + saveHash);
    }

    //alert(saveHash);

} //end navHashHistory



$('.userHistoryConfirmYes').click(function() {
    var step = $(".currentStep").attr("_currentStep");
    var screen = $(".currentScreen").attr("_currentScreen");

    var _mainMenuScreen = localStorage.getItem('RLFhistory_mainmenuscreen');
    //alert(mainMenuScreen);
    swiper.slideTo(_mainMenuScreen, 1500, true);

    //animate current main menu screen first
    setTimeout(function() {

        changeAppPage(step, screen)
    }, 2000);



});

//Step 0 Event Listener
$('.hideFooterBtn').click(function() {
    $('footer').css("visibility", "hidden");
    $('.myProgress').css("visibility", "hidden");
    $('.footerTopMenu').css("visibility", "hidden");

    $('.showFooter').css("visibility", "visible");


});

$('.showFooterBtn').click(function() {
    $('footer').css("visibility", "visible");
    $('.myProgress').css("visibility", "visible");
    $('.footerTopMenu').css("visibility", "visible");
    $('.showFooter').css("visibility", "hidden");
});


$(document).on('click', '.step0Screen', {}, function(e) {
    changeAppPage('step0Screen', null);
});



$(document).on('click', '.step1Screen', {}, function(e) {
    changeAppPage('step1Screen', null);
});

$(document).on('click', '.step2Screen', {}, function(e) {
    changeAppPage('step2Screen', null);
});

$(document).on('click', '.step3Screen', {}, function(e) {
    changeAppPage('step3Screen', null);
});

$(document).on('click', '.step4Screen', {}, function(e) {
    changeAppPage('step4Screen', null);
});

$(document).on('click', '.step5Screen', {}, function(e) {
    changeAppPage('step5Screen', null);
});

$(document).on('click', '.step6Screen', {}, function(e) {
    changeAppPage('step6Screen', null);
});

$(document).on('click', '.step7Screen', {}, function(e) {
    changeAppPage('step7Screen', null);
});

$(document).on('click', '.step8Screen', {}, function(e) {
    changeAppPage('step8Screen', null);
});

$(document).on('click', '.step9Screen', {}, function(e) {
    changeAppPage('step9Screen', null);
});

$(document).on('click', '.step10Screen', {}, function(e) {
    changeAppPage('step10Screen', null);
});


$(document).on('click', '.nextScreen', {}, function(e) {
    swiper.slideNext();
});

$(document).on('click', '.prevScreen', {}, function(e) {
    swiper.slidePrev();
});

$(document).on('click', '.returnToStart', {}, function(e) {
    swiper.slideTo(0, 1500, true);
});

$(document).on('click', '.startInfo', {}, function(e) {
    $("#startInfo").openModal();
});

$(document).on('click', '.glossaryInlineLink', {}, function(e) {

    var _glossaryData = $(this).attr("_glossaryData");
    getGlossaryModalContent(_glossaryData);
});



/*next step*/
$(document).on('click', '.footerNextbtn', {}, function(e) {

  //map for sending user to next screen on click of footerNextbtn
  var nextStep = "tmp";
  if (currentStep == "step1Screen") {
    nextStep = "step2Screen";
  } else if (currentStep == "step2Screen") {
    nextStep = "step3Screen";
  } else if (currentStep == "step3Screen") {
    nextStep = "step4Screen";
  } else if (currentStep == "step4Screen") {
    nextStep = "step5Screen";
  } else if (currentStep == "step5Screen") {
    nextStep = "step6Screen";
  } else if (currentStep == "step6Screen") {
    nextStep = "step7Screen";
  } else if (currentStep == "step6Screen") {
    nextStep = "step7Screen";
  } else if (currentStep == "step7Screen") {
    nextStep = "step8Screen";
  } else if (currentStep == "step8Screen") {
    nextStep = "step9Screen";
  } else if (currentStep == "step9Screen") {
    nextStep = "step10Screen";
  } else if (currentStep == "step10Screen") {
    nextStep = "stepsmenu";
  }

    var tmp = setTimeout(changeAppPage(nextStep, 0), 100);

});



/*prev step*/
$(document).on('click', '.footerPrevbtn', {}, function(e) {

  //map for sending user to next screen on click of footerNextbtn
  var prevStep = "tmp";
  if (currentStep == "step1Screen") {
    prevStep = "stepsmenu";
  } else if (currentStep == "step2Screen") {
    prevStep = "step1Screen";
  } else if (currentStep == "step3Screen") {
  prevStep = "step2Screen";
  } else if (currentStep == "step4Screen") {
    prevStep = "step3Screen";
  } else if (currentStep == "step5Screen") {
    prevStep = "step4Screen";
  } else if (currentStep == "step6Screen") {
    prevStep = "step4Screen";
  } else if (currentStep == "step6Screen") {
    prevStep = "step5Screen";
  } else if (currentStep == "step7Screen") {
    prevStep = "step6Screen";
  } else if (currentStep == "step8Screen") {
    prevStep = "step7Screen";
  } else if (currentStep == "step9Screen") {
    prevStep = "step8Screen";
  } else if (currentStep == "step10Screen") {
    prevStep = "step9Screen";
  }

    var tmp = setTimeout(changeAppPage(prevStep, 0), 100);

});




//declare current step outside of function so that is global and accessible to other functions
var currentStep;

function changeAppPage(step, screenNum) {

    //the step to goto
    var step;
    //the screen number
    var screenNum;

    switch (step) {


      case 'stepsmenuinit':



          $(".navBack").css("visibility", "hidden");
          $(".footerPrev").css("visibility", "hidden");
          $(".stepsCheckBoxPos").css("visibility", "hidden");
          $(".swiper-pagination").css("visibility", "hidden");


          $(".floatspan1").css("visibility", "visible");
          $(".floatspan2").css("visibility", "visible");
          $(".floatspan3").css("visibility", "visible");

          $(".footerTopMenu").css("visibility", "visible");
          $(".myProgress").css("visibility", "visible");

          $(".contentRoot").empty();
          getStepsMenu(screenNum);
          progressControlGetStatus();
          //navHashHistory('stepsmenu');
          $('footer').css("visibility", "visible");
          break;




        case 'stepsmenu':

            swiper.removeAllSlides();
            swiper.destroy(true, false);

            $(".navBack").css("visibility", "hidden");
            $(".footerPrev").css("visibility", "hidden");
            $(".stepsCheckBoxPos").css("visibility", "hidden");
            $(".swiper-pagination").css("visibility", "hidden");


            $(".floatspan1").css("visibility", "visible");
            $(".floatspan2").css("visibility", "visible");
            $(".floatspan3").css("visibility", "visible");

            $(".footerTopMenu").css("visibility", "visible");
            $(".myProgress").css("visibility", "visible");

            $(".contentRoot").empty();
            getStepsMenu(screenNum);
            progressControlGetStatus();
            //navHashHistory(step);
            $('footer').css("visibility", "visible");
            break;


        case 'step0Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");


            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");

            $(".myProgress").css("visibility", "hidden");



            $(".contentRoot").empty();
            getStep0Content(screenNum);
            currentStep = "step0Screen";
            progressControlGetStatus();
            navHashHistory(step);

            $('footer').css("visibility", "visible");
            break;




        case 'step1Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
          $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep1Content(screenNum);
            currentStep = "step1Screen";
            progressControlGetStatus();
            navHashHistory(step);

            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;


        case 'step2Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep2Content(screenNum);
            currentStep = "step2Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;

        case 'step3Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep3Content(screenNum);
            currentStep = "step3Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;




        case 'step4Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep4Content(screenNum);
            currentStep = "step4Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;



        case 'step5Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep5Content(screenNum);
            currentStep = "step5Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;

        case 'step6Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep6Content(screenNum);
            currentStep = "step6Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;

        case 'step7Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep7Content(screenNum);
            currentStep = "step7Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;


        case 'step8Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep8Content(screenNum);
            currentStep = "step8Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;



        case 'step9Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep9Content(screenNum);
            currentStep = "step9Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;


        case 'step10Screen':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");
            $(".footerPrev").css("visibility", "visible");
            $(".stepsCheckBoxPos").css("visibility", "visible");
            $(".swiper-pagination").css("visibility", "visible");

            $(".floatspan1").css("visibility", "hidden");
            $(".floatspan2").css("visibility", "hidden");
            $(".floatspan3").css("visibility", "hidden");

            $(".footerTopMenu").css("visibility", "hidden");
            $(".myProgress").css("visibility", "hidden");

            $(".contentRoot").empty();
            getStep10Content(screenNum);
            currentStep = "step10Screen";
            progressControlGetStatus();
            navHashHistory(step);
            $('footer').css("visibility", "visible");
            $('.showFooter').css("visibility", "hidden");
            break;








    } //close switch

} //end function



/*In Screen Navigation Control*/




$(document).on('click', '._criteriareWritten', {}, function(e) {
    swiper.slideTo(2, 1500, true);
});

$(document).on('click', '._assessmentCriteria', {}, function(e) {
    swiper.slideTo(2, 1500, true);
});

$(document).on('click', '._gloss', {}, function(e) {

    var _to = $(this).attr("_to");

    //So that we know which screen number to go back to
    var _screennum = swiper.activeIndex;

    glossaryControlandReturn(_to, currentStep, _screennum);



});



//Glossary Control
function glossaryControlandReturn(_to, _from, _screennum) {



    switch (_to) {


        case 'screen1':

            swiper.destroy(true, true);
            $(".contentRoot").empty();
            getGlossaryContent(0, _screennum);
            currentStep = _from;

            $('footer').css("visibility", "visible");
            break;

        case 'screen2':

            swiper.destroy(true, true);
            $(".contentRoot").empty();
            getGlossaryContent(1, _screennum);

            $('footer').css("visibility", "visible");
            break;


        case 'screen3':

            swiper.destroy(true, true);
            $(".contentRoot").empty();
            getGlossaryContent(2, _screennum);

            $('footer').css("visibility", "visible");
            break;

        case 'screen4':

            swiper.destroy(true, true);
            $(".contentRoot").empty();
            getGlossaryContent(3, _screennum);

            $('footer').css("visibility", "visible");
            break;

        case 'screen5':

            swiper.destroy(true, true);
            $(".contentRoot").empty();
            getGlossaryContent(4, _screennum);

            $('footer').css("visibility", "visible");
            break;



    } //close switch


} //close function

//Glossary content for Modal
function getGlossaryModalContent(_glossaryData) {

    $(".glossaryContent").empty();

    var link = _glossaryData + ".html";

    $.get('glossaryContent/' + link, function(data) {
        //inject the content into the DOM
        $(".glossaryContent").append(data);
        $("#glossaryModal").openModal();

    }); //end get

} //close function






function setUserHistory(_screennum, currentStep) {

    var currentStep;
    var _screennum;

    if (localStorage.getItem("RLFhistory_currentStep") === null) {
        localStorage.setItem('RLFhistory_currentScreen', _screennum);
        localStorage.setItem('RLFhistory_currentStep', currentStep);
    } else {
        localStorage.setItem('RLFhistory_currentScreen', _screennum);
        localStorage.setItem('RLFhistory_currentStep', currentStep);
    }

} //close function


function getUserHistory() {

    if (localStorage.getItem("RLFhistory_currentStep") === null) {

    } else {
        //Launch Modal
        var step = localStorage.getItem('RLFhistory_currentStep');
        var screenNum = localStorage.getItem('RLFhistory_currentScreen');

        //inject data attributes into modal

        $('#userHistoryPrompt').openModal();

        //set history
        $(".currentStep").attr("_currentStep", step);
        $(".currentScreen").attr("_currentScreen", screenNum);

        //alert("CurrentStep: "+step+" Current Screen: "+screenNum);
    }

}
