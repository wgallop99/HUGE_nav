( function ( document, window, index )
    {
        'use strict';

/*

Ajax request code that will
populate the nav, with unordered lists
as main and subnav units

*/

     	var navRequest = new XMLHttpRequest();
		navRequest.onreadystatechange = function () {
		  if(navRequest.readyState === 4 && navRequest.status === 200) {
		    var nav = JSON.parse(navRequest.responseText).items;
		    menu(nav, 'main-nav');
		  }
		};
		navRequest.open('GET', 'api/nav.json');
		navRequest.send();

/*

Nav Building function
- takes in JSON obj and builds nav
- takes in element(el) which serves
as the selector to append nav build

*/

		function menu(obj, el){
			var list = '<ul class="main-nav-ul">';
		    for (var i=0; i<obj.length; i += 1) {

		      if(obj[i].items != 0){
		      	list += '<li class="main-menu-li_dropdown">';
				list += '<a href="' + obj[i].url +'" class="main-menu-a_dropdown">';
				list += obj[i].label;
				list += '</a>';
		      	list += '<ul class="sub-nav">';

		      	for (var j=0; j<obj[i].items.length; j += 1) {
		      		list += '<li>'
		  	  		list += '<a href="' + obj[i].items[j].url +'">';
		      		list += obj[i].items[j].label;
		      		list += '</a>';
		      		list += '</li>';
		      	}

		      	list += '</ul>';

		      	} else {
		      		list += '<li class="main-menu-li">';
					list += '<a class="main-menu-a" href="' + obj[i].url +'">';
					list += obj[i].label;
		      	}
		      list += '</li>';
		    }
		    list += '</ul>';
		    document.getElementById(el).innerHTML = list;
		}

/*

On click of container remove all mobile menu classes
and remove overlay class 

*/

		window.onload = function(){

			let dropDowns = Array.from(document.querySelectorAll('.main-menu-li_dropdown'));
			let container = document.getElementById('content');

			/* 		Close the dropdown if the user clicks outside of it */ 

			window.onclick = function(e) {
			  if (!e.target.matches('.main-menu-a_dropdown')) {
			  	var dropdownList = document.querySelector('.active');
			  	if(dropdownList){
			  		dropdownList.classList.remove('active');

			/*  	add overlay to container */
			  		container.classList.remove('overlay');
			  	}
			  }
			};

			container.onclick = function(e){
  				var opened = document.querySelector('.mobile-active');
  				if(opened){
  					opened.classList.remove('mobile-active');
  					container.classList.remove('mobile-push');
  					container.classList.remove('overlay');
  				}
  			};

/*

Dropdown menu on window load
- adds active class to dropdown lis 
- also adds overlay class to content container

*/

			/* Add active class to lis of top level nav */

			const dropdown = (e) => {
			  e.preventDefault();
			  const active = document.querySelector('.active');
			  if(active){
			    active.classList.remove('active');
			  }
			  e.currentTarget.classList.toggle('active');

			/*  Remove overlay to container */
			  container.classList.add('overlay');
			}


			/* loop over dropdown nodes */
			dropDowns.forEach(node => {
			  node.addEventListener('click', dropdown)
			});
  		};

/*

- Add mobile active class to header on click of hamburger
- Add mobile-push class to container to "push" content with
the offcanvas nav
- Add overlay class to container if offcanvas is opened

*/

  		let header = document.querySelector('header');
  		let container = document.getElementById('content');

  		header.addEventListener('click', function(event){
  			if(event.target.matches('#open')){

  				this.classList.add('mobile-active');
  				container.classList.add('mobile-push');
  				container.classList.add('overlay');

  			} else if(event.target.matches('#close')){

  				this.classList.remove('mobile-active');
  				container.classList.remove('mobile-push');
  				container.classList.remove('overlay');

  			}
  		});

}( document, window, 0 ));