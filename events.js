
    function openNav(){
        document.getElementById("mySidebar").style.width="200px";
        document.getElementById("menubtn").style.visibility="hidden";
    }
    function closeNav(){
        document.getElementById("mySidebar").style.width="0";
        document.getElementById("main").style.marginLeft="0";
        document.getElementById("menubtn").style.visibility="visible";

    }
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("menubtn");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
