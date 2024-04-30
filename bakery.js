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