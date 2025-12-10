$(document).ready(function() {
  $(".fancybox").fancybox({
    maxWidth  : 2000,
    maxHeight  : 1000,
    width    : '80%',
    height    : '90%',
    padding   : 30,
    margin      : [20, 60, 20, 60], // Increase left/right margin
    helpers : {
      title: {
        type: 'inside'
      }            
    }  
  });
});

$(document).ready(function() {
  $(".fancybox_content").fancybox({
    maxWidth  : 900,
    maxHeight  : 600,
    fitToView  : false,
    width    : '90%',
    height    : '90%',
    padding   : 30,
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'fade',
    closeEffect  : 'fade',
    scrolling   : 'visible' 
  });
});

$(document).ready(function() {
  $('.fancybox-media').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : true
    }
  });
});