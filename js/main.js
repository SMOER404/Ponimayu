$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');
  var navbarHeight = $navbar.outerHeight();
  var movement = 0;
  var lastDirection = 0;

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) {
      if (lastDirection != 1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin + "px")

      lastDirection = 1;
    } else {
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin - navbarHeight;
      $navbar.css('margin-top', margin + "px")

      lastDirection = -1;
    }

    lastScrollTop = st;
  });
});
$('.panel-title').on('click', '> a', function () {
  let img = $('img', this)

  if (img.css('transform') === 'none') {
    img.css({
      'transform': 'rotate(180deg)'
    })
  } else {
    img.css({'transform': 'none' })
  }
});

// вешаем на всех прямых потомков класса "nav-tabs"
// оброботчики события "click". по нажатию на li, 
// мы записываем в переменную linkParams параметры:
// ширину контента и позицию лефт.  
$('.tab-block__menu').on('click', '> *', function () {
  const linkParams = {
    width: $(this).width(),
    left: $(this).position().left
  }

  // вызываем функцию, которая сэтит новые цсс свойства
  // нашего ползунка. соот-но, передавая новые параметры. 
  setScrollPosition(linkParams)
});

// функция ищет первого ребенка нашего таба 
// и сэтит первоначальное расположение бегунка
const getInitialScrollPosition = () => {
  const firstLink = $('.tab-block__menu li:first-child')

  const firstLinkParams = {
    width: firstLink.width(),
    left: firstLink.position().left
  }

  setScrollPosition(firstLinkParams)
}

// функция, которая получает параметры
// и устанавливает бегунок в необходимую позицию 
// и необходимой ширины 
const setScrollPosition = (params) => {
  if (params) {
    $('#underline').css({
      'width': `${params.width}px`,
      'left': `${params.left}px`
    })
  }
}


// When the DOM is ready, run this function
$(document).ready(function () {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: 'hover',
    interval: 4000,
    wrap: false,

  });
});

$(document).ready(function () {
  //Set the carousel options
  $('#quote-carousel2').carousel({
    pause: 'hover',
    interval: 4000,
    wrap: false,

  });
});


$(document).ready(function () {
  //Set the carousel options
  $('#quote-carousel3').carousel({
    pause: 'hover',
    interval: 4000,
    wrap: false,

  });
});

var checkitem = function() {
  var $this;
  $this = $("#quote-carousel");
  if ($("#quote-carousel .carousel-inner .item:first").hasClass("active")) {
    $this.children(".left").hide();
    $this.children(".right").show();
  } else if ($("#quote-carousel .carousel-inner .item:last").hasClass("active")) {
    $this.children(".right").hide();
    $this.children(".left").show();
  } else {
    $this.children(".carousel-control").show();
  }
};

checkitem();

$("#quote-carousel").on("slid.bs.carousel", "", checkitem);

var checkitem = function() {
  var $this;
  $this = $("#quote-carousel2");
  if ($("#quote-carousel2 .carousel-inner .item:first").hasClass("active")) {
    $this.children(".left").hide();
    $this.children(".right").show();
  } else if ($("#quote-carousel2 .carousel-inner .item:last").hasClass("active")) {
    $this.children(".right").hide();
    $this.children(".left").show();
  } else {
    $this.children(".carousel-control").show();
  }
};

checkitem();