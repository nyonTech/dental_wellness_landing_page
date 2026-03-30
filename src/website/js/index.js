



$('.toggle-menu').click (function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});


/*================================== menu ==================================*/

var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 2500) {
	$backToTop.fadeIn();
  } else {
	$backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 1000);
});

/*================================== menu ==================================*/

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
  
  //Project hover animation 
  $('#portfolio .thumbnail').hover(function(){
	$(this).children(".cust-caption").slideDown();
  },
  function(){
	$(this).children(".cust-caption").fadeOut();
  });
});
  
 //Skills' animation
$(window).scroll(function(){
  jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
});


/*================================== menu ==================================*/

	$(function() {
	$('.scroll-down').click (function() {
	  $('html, body').animate({scrollTop: $('div.beforsec').offset().top }, 'slow');
	  return false;
	});
	});

/*================================== menu ==================================*/

	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       100,
		callback:     function(box) {
		  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	  }
	);
	wow.init();
	document.getElementById('moar').onclick = function() {
	  var section = document.createElement('section');
	  section.className = 'section--purple wow fadeInDown';
	  this.parentNode.insertBefore(section, this);
	};

/*================================== menu ==================================*/
