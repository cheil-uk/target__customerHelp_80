// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================
import Elements from "./components/elements";
import PopUpContent from "./components/popUpContent";
import Configurator from "./components/configurator";
var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					main.appendNewStyle();
					const path = window.location.pathname;
					const elements = new Elements();
					const configurator = new	Configurator();

					const daSkus = [
									"WW90T554DAN",
									"WW90T554DAW",
									"WW90TA046AE",
									"WW90T534DAN",
									"WW90TA046AX",
									"WW80TA046AE",
									"DV90T5240AN",
									"WW80TA046AX",
									"WW90T684DLH",
									"DV90TA040AE",

									"RS68A8820S9",
									"RB31FDRNDSA",
									"RB29FSRNDSA",
									"RS67A8810B1",
									"RB34T602EWW",
									"RS67A8810S9",
									"RB34T602ESA",
									"RS6HA8880S9",
									"RL38A776ASR",
									"BRB26600FWW" ]

									daSkus.forEach((sku) => {

										if( path.includes( sku.toLowerCase() )) {

												elements.addingElements();
												main.addElements();
												main.setEvents('deliveryPopup');
												configurator.usp();
										}

									});




				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 900)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},

		removeStuff: function () {

			console.log('removeStuff');

			//Remove Elements
		},



		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		addElements: function () {

				var acc = document.getElementsByClassName("accordion");
				var i;

				for (i = 0; i < acc.length; i++) {
						acc[i].addEventListener("click", function() {
								/* Toggle between adding and removing the "active" class,
								to highlight the button that controls the panel */
								this.classList.toggle("active");

								/* Toggle between hiding and showing the active panel */
								var panel = this.nextElementSibling;
								if (panel.style.display === "block") {
										panel.style.display = "none";
								} else {
										panel.style.display = "block";
								}
						});
				}

		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			switch (elm) {
				case 'deliveryPopup':
					//code to open modal;
					$('.youtube_video_link').on('click', function(e){
						e.preventDefault();
						const popUpContent = new PopUpContent();
						popUpContent.addContent('https://www.youtube.com/embed/C6Bkz9pgAIM', 'https://www.youtube.com/embed/er7XE68fVEI', e.target);
					});
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		}


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

