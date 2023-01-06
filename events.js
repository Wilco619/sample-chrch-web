
    function openNav(){
        document.getElementById("mySidebar").style.width="180px";
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

// let mybtn = document.getElementById("upbtn");
//     window.onscroll = function() {scrollFunction()};
//     function scrollFunction(){
//         if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
//             mybtn.style.display = "block";
//         }else{
//             mybtn.style.display = "none";   
//         }
//     }

    function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
