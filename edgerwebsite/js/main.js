// Initialize and add the map
function initMap() {
  // Your location--THIS IS CALLED THE JS OBJECT 
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  // creating a variable called map ˀand setting it to a new google  map and the queryselector is targeting the class map in the html file. The center position is gon' be in the location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background-THIS MAKES THE NAVBAR TRANSPARENT IF YOU SCROLL DOWN MORE THAN 150, ELSE.
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});