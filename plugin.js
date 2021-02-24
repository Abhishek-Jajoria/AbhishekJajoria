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
 };

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 };

//  -------------- DARK MODE --------------------

// new Darkmode().showWidget();

const options = {
    
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
    
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
