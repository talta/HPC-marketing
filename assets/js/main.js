/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

})(jQuery);


  function buildForm() {
    if (SqPaymentForm.isSupportedBrowser()) {
      var paymentDiv = document.getElementById("form-container");
      if (paymentDiv.style.display === "none") {
          paymentDiv.style.display = "block";
      } 
      paymentform.build();
      paymentform.recalculateSize();
    } else {
      // Show a "Browser is not supported" message to your buyer
    }
  }


// paymentForm.build()

var paymentForm = new SqPaymentForm({
 applicationId: applicationId,
 inputClass: 'sq-input',
 cardNumber: {
   elementId: 'sq-card-number',
   placeholder: '•••• •••• •••• ••••'
 },
 cvv: {
   elementId: 'sq-cvv',
   placeholder: 'CVV'
 },
 expirationDate: {
   elementId: 'sq-expiration-date',
   placeholder: 'MM/YY'
 },
 postalCode: {
   elementId: 'sq-postal-code'
 },
 callbacks: {
   cardNonceResponseReceived: function (errors, nonce, cardData) {
     $('card-nonce').value = nonce;
     $('nonce-form').submit();
   }
  }
});

function requestCardNonce(event) {
 event.preventDefault();
 paymentForm.requestCardNonce();
}





function displayMap(){
	loc = {lat: 41.053817, lng: -81.5209307}
	
	var locations = [
		['Acme No. 1 - West Market Street', 41.1131756,-81.5763576, 1],
		['Acme No. 2 - Ellet', 41.0478027,-81.4445077, 2],
		['Acme No. 2 - Ellet', 41.2381518,-81.4499531, 3],
		['Acme No. 6 - Norton', 41.0241169, -81.6419094, 4],
		['Acme No. 7 - Kent', 41.1562192, -81.3342223, 5],
		['Acme No. 10 - State Road', 41.1370669, -81.5112638, 6],
		['Acme No. 11 - Tallmadge', 41.0853575, -81.4462289, 7],
		['Acme No. 12 - Bailey Road ', 41.1453321, -81.4771101, 8],
		['Acme No. 14 - Portage Lakes', 41.0119098, -81.5546314, 9],
		['Acme No. 15 - Montrose', 41.1376565, -81.6442801, 10],
		['Acme No. 16 - North Canton', 40.8929361, -81.4070912, 11],
		['Acme No. 17 - Stow', 41.1571509, -81.4031358, 12],
		['Acme No. 18 - East Avenue', 41.0453857, -81.6403917, 13],
		['Acme No. 19 - Whipple Avenue', 40.8313821, -81.4287388, 14],
		['Acme No. 20 - Parma', 41.3596991, -81.6894634, 15],
		['Acme No. 21 - Green', 40.9567427, -81.4657745, 16],
		['Buehlers - Ashland', 40.860245, -82.2837357, 17],
		['Buehlers - Canton', 40.8591138, -81.4838887, 18],
		['Buehlers - Coshocton', 40.26065, -81.8692037, 19],
		['Buehlers - Dover', 40.5512385, -81.4994853, 20],
		['Buehlers - Massillon', 40.795841, -81.5525117, 21],
		['Buehlers - Medina', 40.8512883, -82.0012252, 22],
		// {lat: 40.8512883,-82.0012252, lng:},
		['Buehlers - New Philadelphia', 40.4835487, -81.4484652, 23],
		['Buehlers - Orrville', 40.843026, -81.7799047, 24],
		['Buehlers - Portage Lakes', 40.9774165, -81.5223326, 25],
		['Buehlers - Wadsworth', 41.0472027, -81.7340854, 26],
		['Buehlers - Wooster', 40.8221627, -81.9388034, 27],
		['Buehlers - Wooster', 40.8221204, -81.9388035, 28],
		['Portage Crossing Market District', 41.1466306, -81.5088639, 29],
		['Green Market District', 40.9622035, -81.4715323, 30],
		['Hartville Marketplace & Flea Market', 40.9738514, -81.3630997, 31],
		['Hartville Kitchen', 40.9721647, -81.3622265, 32],
		['Shaffers Market', 40.9764457, -81.5258324, 33],
		['The Farmers Rail', 41.1784109, -81.6390727, 34],
		['Peppers Fresh Market', 41.3362937, -81.5315938, 35],
		['McKennas Market Cambridge', 40.0249317, -81.5936887, 36],
		['Devitis Italian Market', 41.1019898, -81.4969205, 37],
		['Cornerstone Market & Deli', 41.1309091, -81.442685, 38],
		['Kirbies Meats and Catering', 41.165958, -81.4086747, 39],
		['ONeils Drive Thru', 41.1642487, -81.340712, 40],
		['Safeway', 41.1645753, -81.3878449, 41],
		['Suffield Carryout', 41.0285915, -81.3500064, 42],
		['Westside Food Mart Shell', 41.1514182, -81.3861411, 43],
		['Kleins Seafood', 41.053541, -81.5208533, 44],
		['PALs SNACK FOODS, LLC - HEADQUARTERS', 41.053817, -81.5209307, 45],
		['Thirsty Dog Taphouse - Akron', 41.0671697, -81.5195285, 46],
		['Primos Deli', 41.0602004, -81.5833655, 47],
		['Guiseppes Pizza', 40.956882, -81.5327177, 48],
		['Nomz', 41.0886894, -81.5181118, 49]
	];
	
	var marker, i;
	var infowindow = new google.maps.InfoWindow();
	
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 9,
			center: loc,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_CENTER
			},
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			streetViewControl: false
		})
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<div><strong style="color: #555;" ">'+locations[i][0]+'</strong></div>');
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
};


// function displayMarkers(){
// 	for (i=0; i< locations.length; i++){
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 			map:map
// 		});
// 	}
// }



// var marker, i;
// var markers = locations.map(function(location, i){
// 	return new google.maps.Marker({
// 		position: location
// 		// label: labels[i % labels.location]
// 	});
// });

