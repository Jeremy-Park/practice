// Get the navbar

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
// function myFunction() {
//   if (window.pageYOffset  = 0) {
//     navbar.classList.add("navbar-transparent")
//     navbar.classList.remove("navbar-white");

//   } else {
//     navbar.classList.remove("navbar-transparent");
//     navbar.classList.add("navbar-white");

//   }
// }

// enabling tooltips everywhere
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

function hider(mq) {
  // lg size, hides and shows
  if (mq.matches) {
    // BIG SIZE
    // initialize
    // if its at top or not it should be fixed
    document.getElementById("navbar").style.position = "fixed";

    // if its a the top transparent with white text
    if (window.pageYOffset == 0) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar-brand").style.color = "white";
      document.getElementById("n0").style.color = "white";
      document.getElementById("n1").style.color = "white";
      document.getElementById("n2").style.color = "white";
      document.getElementById("n3").style.color = "white";


 
      // if its not top white bar with dark text
    } else {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(255, 255, 255, 0.5)";
      document.getElementById("navbar-brand").style.color = "black";
      document.getElementById("n0").style.color = "black";
      document.getElementById("n1").style.color = "black";
      document.getElementById("n2").style.color = "black";
      document.getElementById("n3").style.color = "black";


    }

    // when its moving
    window.onscroll = function () {
      // should be fixed just in case
      document.getElementById("navbar").style.position = "fixed";

      //change the color of the top thing
      if (window.pageYOffset == 0) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar-brand").style.color = "white";
        document.getElementById("n0").style.color = "white";
        document.getElementById("n1").style.color = "white";
        document.getElementById("n2").style.color = "white";
        document.getElementById("n3").style.color = "white";

      } else {
        document.getElementById("navbar").style.backgroundColor =
          "rgba(255, 255, 255, 0.5)";
        document.getElementById("navbar-brand").style.color = "black";
        document.getElementById("n0").style.color = "black";
        document.getElementById("n1").style.color = "black";
        document.getElementById("n2").style.color = "black";
        document.getElementById("n3").style.color = "black";

      }

      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    };


    // SMALL SIZE
  } else {

    // get all text to black
    // stick it to the top
    // background is white
    document.getElementById("navbar-brand").style.color = "black";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.position = "static";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("n0").style.color = "black";
    document.getElementById("n1").style.color = "black";
    document.getElementById("n2").style.color = "black";
    document.getElementById("n3").style.color = "black";




    // smaller sizes is static at top
    // scroller does nothing if its small
    window.onscroll = function () {
    };
  }
}

var mq = window.matchMedia("(min-width: 992px)");
hider(mq);
mq.addListener(hider);
