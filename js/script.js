$(document).ready(function() {

  // detect scroll (for header)
  function fixedHeader() {
    if(!$(window).scrollTop() == 0) {
      $('.header').addClass('is-fixed');
    } else {
      $('.header').removeClass('is-fixed');
    }
  }
  fixedHeader();
  $(window).scroll(function(){
    fixedHeader();
  });
	
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false,
		itemWidth: 85,
		itemMargin: 5,
		asNavFor: '#flexslider-main'	
	});
 
	$('#flexslider-main').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel",
		start: function(slider){
			$("#curSlider").html(slider.currentSlide + 1);
			$("#allSliders").html(slider.count);
		},
		after: function(slider){	
			$("#curSlider").html(slider.currentSlide + 1);	
		}
	});
	
	if($("#accordion").length) 
	{
		$( "#accordion" ).accordion({
			event: "click hoverintent"
		});
	}	
	if($("#accordion2").length) 
	{
		$( "#accordion2" ).accordion({
			event: "click hoverintent"
		});
	}
});


/*
* hoverIntent | Copyright 2011 Brian Cherne
* http://cherne.net/brian/resources/jquery.hoverIntent.html
* modified by the jQuery UI team
*/
  $.event.special.hoverintent = {
    setup: function() {
      $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    teardown: function() {
      $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    handler: function( event ) {
      var currentX, currentY, timeout,
        args = arguments,
        target = $( event.target ),
        previousX = event.pageX,
        previousY = event.pageY;
 
      function track( event ) {
        currentX = event.pageX;
        currentY = event.pageY;
      };
 
      function clear() {
        target
          .unbind( "mousemove", track )
          .unbind( "mouseout", clear );
        clearTimeout( timeout );
      }
 
      function handler() {
        var prop,
          orig = event;
 
        if ( ( Math.abs( previousX - currentX ) +
            Math.abs( previousY - currentY ) ) < 7 ) {
          clear();
 
          event = $.Event( "hoverintent" );
          for ( prop in orig ) {
            if ( !( prop in event ) ) {
              event[ prop ] = orig[ prop ];
            }
          }
          // Prevent accessing the original event since the new event
          // is fired asynchronously and the old event is no longer
          // usable (#6028)
          delete event.originalEvent;
 
          target.trigger( event );
        } else {
          previousX = currentX;
          previousY = currentY;
          timeout = setTimeout( handler, 10 );
        }
      }
 
      timeout = setTimeout( handler, 10 );
      target.bind({
        mousemove: track,
        mouseout: clear
      });
    }
 };
