$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // "Top" Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 670) {
          $(this).addClass("slideEffect");
        }
    });
  });

  // "Left" Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim-left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 670) {
          $(this).addClass("slideEffect-left");
        }
    });
  });

  // "Right" Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim-right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 670) {
          $(this).addClass("slideEffect-right");
        }
    });
  });

  // "Top" Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim1").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 970) {
          $(this).addClass("slideEffect");
        }
    });
  });

  $(window).scroll(function () {
    var scrollh = $(this).scrollTop();
    if (scrollh === 0) {
        $(".navbar").css({
            'height':'90px',
            'padding': "20px 0",
            'transition': 'all .5s'
        });
    } else {
        $(".navbar").css({
            'height':'50px',
            'padding': "0"
        });
    }
});


  $("#view_btn").click(function(event){
    event.preventDefault();

    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 800);
  });

});



// "About me"

// Skills
 jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },6000);
    });
  });


  $(function() {
    $(".meter > span").each(function() {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
          width: $(this).data("origWidth")
        }, 1200);
    });
  }); 


// Projects

// "Load more content"

$(function () {
    $(".more").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".more:hidden").slice(0, 8).slideDown();
        if ($(".more:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('body,html').animate({
            scrollTop: $(this).offset().top - 400
        }, 1500);
    });
});

$('a[href=#projects]').click(function () {
    $('body,html').animate({
        scrollTop: $("#projects").offset().top
    }, 700);
    return false;
}); 


$('a[href=#projects]').click(function () {
    $('body,html').animate({
        scrollTop: $("#projects").offset().top
    }, 700);
    return false;
});


// Parallax effect 
$( document ).mousemove( function( e ) {
  $( '.main' ).parallax( -50, e );
});


// Google Map
var myCenter = new google.maps.LatLng (51.508742, -0.120850);
var sanFrancisco = new google.maps.LatLng (37.774929, -122.419416);
var vilnius = new google.maps.LatLng (54.687156, 25.279651);
var moscow = new google.maps.LatLng (55.755826, 37.617300);
var markers = [];

function initialize() {
  var mapOptions = {
    center: myCenter,
    zoom: 3,
    scrollwheel:false,
    draggable:false,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('googleMap'),mapOptions);

  var marker = new google.maps.Marker ({
      position: myCenter,
      map: map,
      title:'London',
    //  icon: 'http://maps.google.com/mapfiles/ms/micons/purple.png',
      icon: 'http://www.google.com/mapfiles/shadow50.png',
      animation:google.maps.Animation.DROP
    });

    var marker = new google.maps.Marker ({
      position: sanFrancisco,
      map: map,
      title:'San Francisco',
      icon: 'http://www.google.com/mapfiles/shadow50.png',
      animation:google.maps.Animation.DROP
    });

      var marker = new google.maps.Marker ({
      position: vilnius,
      map: map,
      title:'Vilnius',
      icon: 'http://www.google.com/mapfiles/shadow50.png',
      animation:google.maps.Animation.DROP
    });

    var marker = new google.maps.Marker ({
      position: moscow,
      map: map,
      title:'Moscow',
      icon: 'http://www.google.com/mapfiles/shadow50.png',
      animation:google.maps.Animation.DROP
    });

   marker.setMap(map);


  // Define a symbol using SVG path notation, with an opacity of 1.
  var planeSymbol = {
    path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
    scale: 0.045, 
    strokeOpacity: 1,
    color: 'black',
    strokeWeight: 1,
    anchor: new google.maps.Point(300,300)
  };

  var lineCoordinates = [
    new google.maps.LatLng(37.774929, -122.419416),
    new google.maps.LatLng(40.712784, -74.005941),
    new google.maps.LatLng(51.508742, -0.120850),
    new google.maps.LatLng(54.687156, 25.279651),
    new google.maps.LatLng(55.755826, 37.617300)
  ];

   var bounds = new google.maps.LatLngBounds();
   bounds.extend(lineCoordinates[0]);
   bounds.extend(lineCoordinates[4]);
  
  // Create the polyline, passing the symbol in the 'icons' property.
  var line = new google.maps.Polyline({
    path: lineCoordinates,
    strokeOpacity: 0,
    icons: [{
      icon: planeSymbol,
      offset: '0'
    }],
    map: map
  });

  map.fitBounds(bounds);
  animatePlane(line);


  google.maps.event.addListener(map,'center_changed',function() {
  // 3 seconds after the center of the map has changed, pan back to the marker
    window.setTimeout(function() {
        map.panTo({lat: 51.508742, lng: -0.120850});
      },2000);
    });

}
  // Use the DOM setInterval() function to change the offset of the symbol
  // at fixed intervals.
  function animatePlane(line) {
      var count = 0;
      window.setInterval(function() {
        count = (count + 1) % 2000;

        var icons = line.get('icons');
        icons[0].offset = (count / 20) + '%';
        line.set('icons', icons);
    }, 20);
  }
google.maps.event.addDomListener(window, 'load', initialize);