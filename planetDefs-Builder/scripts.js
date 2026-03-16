// #region Old Code
var toggler = document.getElementsByClassName("expand");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".collapsed").classList.toggle("expanded");
    this.classList.toggle("collapse");
  });
}
// #endregion

// #region TreeView
var treeView = document.getElementById("galaxyTreeView");
treeView.innerHTML += "<li id=\"galaxy\"><span class=\"icon\"></span>Galaxy</span></li>";
var galaxy = document.getElementById("galaxy");
// #endregion

// #region Tips
var tipButton = document.getElementById("tipButton")
var tip = document.getElementById("tip")

var tips = [
  "Click on the gear icon to my left to see more tips :)",
  "Right click on an element to see if you can add properties to it.",
  "Double check your Advanced Rocketry configuration to ensure the mod uses your custom planetDefs.xml."
  // TODO: Add more
]

tip.innerHTML = tips[0];
tipButton.onclick = function() {
  // TODO: Add animation
  tip.innerHTML = tips[Math.floor(Math.random() * tips.length)];
}
// #endregion

// #region Custom Context Menu
var contextMenu = document.getElementsByClassName("contextMenu")[0];
galaxy.addEventListener("contextmenu", function(evt) {
  evt.preventDefault();
  // Open CCM
})
// #endregion