$(".navbar-burger").click(function (e) {
  $(".navbar-menu").toggleClass("is-active");
  $(".navbar-burger").toggleClass("is-active");
});

tags = ["is-black", "is-dark", "is-primary", "is-link", "is-info", "is-success", "is-warning","is-danger"]

mybutton = document.getElementById("btnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}