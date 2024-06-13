var headerStrip = document.querySelector("#header_strip");
var Header = document.querySelector("#header");
var heroContent = document.querySelector(".hero_content");
document.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > 49) {
      headerStrip.classList.add("header_strip_active");
      Header.classList.add("header_active");

    } else {
      headerStrip.classList.remove("header_strip_active");
      Header.classList.remove("header_active");

    }
  }
);

var headNavUl = document.querySelector("#header_nav ul");
var menuBar = document.querySelector("#menu_bar");
menuBar.addEventListener("click", function () {
  if (headNavUl.style.left !== "0px") { // Checking if the menu is closed or not
    headNavUl.style.left = "0px"; // Open the menu
  } else {
    headNavUl.style.left = "-100%"; // Close the menu
  }
});




//  Slider Script

// $('.sec4_slider').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     duration: 2000,
//     speed: 1200,
//     dots: true,
//   });

$('.sec4_slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  duration: 2000,
  speed: 1200,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




// MEnu PAge JAva Script



function menuActive(clickedElement) {
  // Reset background color and text color for all menu buttons
  var menuBtns = document.querySelectorAll('.menu_categ');
  menuBtns.forEach(function (btn) {
    btn.classList.remove('menu_categ_active');
  });

  // Set background color and text color for the clicked menu button
  clickedElement.classList.add('menu_categ_active');

  // Get the category name from the clicked element's class
  var categoryName = clickedElement.textContent.trim();

  // Get all menu items
  var menuItems = document.querySelectorAll('.menu');

  // Loop through all menu items to toggle their visibility based on the clicked category
  menuItems.forEach(function (menuItem) {
    // Check if the menu item has the corresponding category class
    if (menuItem.classList.contains('menu_' + categoryName)) {
      menuItem.classList.add('menu_shown'); // Add class to show the menu item
      menuItem.classList.remove('menu_hidden'); // Remove class to hide the menu item
    } else {
      menuItem.classList.remove('menu_shown'); // Remove class to show the menu item
      menuItem.classList.add('menu_hidden'); // Add class to hide the menu item
    }
  });
}

