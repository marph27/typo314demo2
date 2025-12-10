$('.accordion-toggle.layer1').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.removeClass('active');
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
    $('.accordion-toggle.layer1').removeClass('active');
    $('.accordion-toggle.layer2').removeClass('active');

      $this.addClass('active');
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


$('.accordion-toggle.layer2').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.removeClass('active');
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
    $('.accordion-toggle.layer2').removeClass('active');

      $this.addClass('active');
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});