# Will Gallop's Huge Navigation Exercise

## Overview

This responsive webpage begins with an AJAX request to a JSON file which populates the main navigation. 
The main navigation includes multiple dropdown components which are displayed onclick. 

###Install the exercise locally
```
git clone git@github.com:hugeinc/NavExercise.git
cd NavExercise
npm install
npm start
```

### Running SASS 
```
sass --watch scss:css
```

###Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

* No javascript frameworks or libraries
* The SASS css pre-processor is used to compile all css
* Font Awesome font icons are used for chevrons 
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Page should look good across all viewport sizes.
* ZIP file is named WillGallop_HugeNavExercise.zip.
* Node_modules not included in zip folder

###Unit Testing Disclaimer
* I do not have any prior experience with unit testing from a UI component
perspective so unfortunately there aren't any included in this project
* Please include any learning resources you may have, I have already looked in to learning Selenium and Mocha. 
* Browser testing was conducted on all major browsers: IE, Safari, Chrome, and Firefox

### Interactions using CSS and Javascript

* All JavaScript can be found in the js folder in the public directory
* All CSS is pre processed with Sass and can be found in the SCSS folder in the public directory

#### Desktop

* On hover, Primary Navigation reverses color (white/magenta).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, the class of 'active' is added to the targeted li
	* which then triggers active styles that hide and show the secondary navigation
	* the overlay class is also applied to the container below menu 
* On hover in, Secondary Navigation changes color (magenta/light gray).
* On click, Secondary navigates to a new page.
* On click of any other menu, old menu with class of active is hidden
* On click outside of menu, menu and mask are hidden.
* When the screen is resized, media queries are utilized to decrease font-size of nav links
	* Hero title is expanded to a width of 90% to increase responsive nature

#### Mobile

* When a user clicks the open navigation icon (“hamburger”) the class of 'mobile-active' is applied to the header 
	* That class triggers the hamburger to be hidden, and the 'x' svg is displayed
	* The 'x' svg is pushed to the right side and the huge logo appear through absolute positioning
	* The main nav is positioned absolutely to the left outside of the window and moved through absolute positioning, a result of applying the mobile-active class 
	* The overlay class is applied to the container below the header and the mask is applied
	* The class of mobile-push is also applied to the container below the header which uses the transform property to move content to the right

* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user clicks a Primary Navigation menu item, the active class is applied and the max-height property of the child 'sub-nav' class changes its max-height property from 0 to 500px, which maximizes the allowed height 
* When a user hovers a Secondary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When a user clicks outside of the navigation, the 'mobile-active', 'mobile-push', and 'overlay' classes are removed
	* The 'x' is hidden and the 'hamburger' appears
	* The absolute positioning reverts back to it's original position
	* The header, content container, and nav are pushed back

* On mobile the hero title is hidden and a new title is display above the body copy 
	* all copy is scaled down using media queries

