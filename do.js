
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("all").style.display = "block";
}

