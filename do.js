
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  // document.getElementById("loading").style.display = "none";
  document.getElementById("all").style.display = "block";
}


<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>


var swiper = new Swiper(".domySwiper", {

  navigation: {
    nextEl: "#dobuttonright",
    prevEl: "#dobuttonleft",
  },
  loop: true,
  slidesPerView: 3,
  speed: 300,



});
