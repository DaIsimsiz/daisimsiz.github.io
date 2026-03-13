var toggler = document.getElementsByClassName("expand");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".collapsed").classList.toggle("expanded");
    this.classList.toggle("collapse");
  });
}