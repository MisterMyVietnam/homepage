// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var teasertext = document.getElementById("teaserText");
var my = document.getElementById("My");

function triggerModal(txt) {

  teasertext.style.display = "none";
  my.style.display = "none";
  modal.style.display = "block";
  modalImg.src = txt;
  // captionText.innerHTML = this.alt;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeCustom")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
  teasertext.style.display = "flex";
  my.style.display = "flex";
}

span.onclick = function() {
modal.style.display = "none";
}
