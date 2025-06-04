var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsee = this.nextElementSibling;
    if (collapsee.style.display === "block") {
      collapsee.style.display = "none";
    } else {
      collapsee.style.display = "block";
    }
  });
}
