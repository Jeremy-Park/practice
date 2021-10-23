/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

function hider(mq) {
  // lg size, hides and shows
  if (mq.matches) {
    window.onscroll = function () {
      document.getElementById("navbar").style.position = "fixed";


      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    };
  } else {
    // smaller sizes is static at top
    window.onscroll = function () {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.position = "static";
    };
  }
}

var mq = window.matchMedia("(min-width: 992px)");
hider(mq);
mq.addListener(hider);
