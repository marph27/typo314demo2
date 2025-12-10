$(document).ready(function() {

  //Variablen
  heightHeader = $("#header").height();
  widthHeader = $("#header").width();
  startNavigationsBreite = widthHeader * 0.5;
  scrollPosition = $(document).scrollTop();

  //Funktion
  $('.pancakeBackground').width(startNavigationsBreite + 'px');
  
  //Funktion
  if (scrollPosition > heightHeader && startNavigationsBreite >= 350) {
    $('.pancakeBackground').width(startNavigationsBreite - (heightHeader * 0.5) + 'px');
    $('.navigation .wrapper').css('padding-top', '1%');
  };

  // Wenn das Browserfenster verändert wird
  $(window).resize(function(){
    //Variablen
    widthHeader = $("#header").width();
    startNavigationsBreite = $('.pancakeBackground').width();

    if (widthHeader < 2000 && widthHeader > 600) {
      $('.pancakeBackground').width(widthHeader * 0.5 + 'px');
    };

  });

  // Wenn man die Website scrollt
  $(window).scroll(function(){
    
    //Variablen
    scrollPosition = $(document).scrollTop();
    ergebnisBreiteNavigation = startNavigationsBreite - (scrollPosition * 0.5);
    ergebnisWrapperPancake = 3 - (2 / heightHeader * scrollPosition);
    NavigationsBreite = $('.pancakeBackground').width();

    //Ausgabe in einer Frontend-Box zum debuggen
    $("#output").html("<p>" + 
      "Position Scroll: " + scrollPosition + 
      "<br/>Höhe Header: " + heightHeader + 
      "<br/>Breite Header: " + widthHeader + 
      "<br/>Ergebnis: " + ergebnisBreiteNavigation + 
      "<br/>Wrapper: " + ergebnisWrapperPancake + 
      "<br/>Startbreite Navigation: " + startNavigationsBreite + 
      "px</p>");
    
    //Funktion
    if (scrollPosition <= heightHeader && NavigationsBreite >= 350) {
      $('.pancakeBackground').width(ergebnisBreiteNavigation + 'px');
      $('.navigation .wrapper').css('padding-top', ergebnisWrapperPancake + '%');
    };
  });

});  

                                  
                                      