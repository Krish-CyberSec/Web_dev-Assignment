window.addEventListener('load', load);

function load() {
  var nav=document.getElementById("nav");
   var icon=document.getElementById("icon");
    var navLinks = nav.querySelectorAll("a");

    
  icon.addEventListener("click", function() {
        nav.classList.toggle("show"); 
    });


  navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            nav.classList.remove("show");  
        });
    });
}
