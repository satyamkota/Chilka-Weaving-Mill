window.sr = ScrollReveal({ reset: true });
sr.reveal('.container', { duration: 2000,
    origin: 'bottom',
    distance: '50px',
    delay: 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

//Get the button:
mybutton = document.getElementById("myBtn");

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
