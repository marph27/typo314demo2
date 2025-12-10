$(window).scroll(function(){
      var headery = $(document).scrollTop();
      var offsetheader = $("#header").offset();
      var heightheader = $("#header").height();
      var heightheadervideo = 720;
      var ergebnisPancake = 30 - (headery * 0.02083333);
      $("#output").html("<p>" + "Position Scroll:" + headery + "<br/>Höhe Headerimage:" + heightheaderimage + "<br/>Ergebnis:" + ergebnisPancake + "<br/>Höhe Header:" + heightheader + "</p>");

      if (headery <= heightheadervideo) {
        $('.navigation').height(ergebnisPancake + '%');
      }
 });

                                  
                                      