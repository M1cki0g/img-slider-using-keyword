function display1(element) {
  document.getElementById("main").style.backgroundImage =
    "url('télécharger.jpeg')";
  document.getElementById("main").style.backgroundSize = "cover";
  document.getElementById("text").innerHTML = element.alt;
}
function display2(element) {
  document.getElementById("main").style.backgroundImage =
    "url('télécharger (1).jpeg')";
  document.getElementById("main").style.backgroundSize = "cover";
  document.getElementById("text").innerHTML = element.alt;
}
function display3(element) {
  document.getElementById("main").style.backgroundImage =
    "url('télécharger (2).jpeg')";
  document.getElementById("main").style.backgroundSize = "cover";
  document.getElementById("text").innerHTML = element.alt;
}
//----------------------------------------------------------------
let currentImageIndex = 0; // To track the current image

// Array of image sources
let images = [
  "télécharger.jpeg",
  "télécharger (1).jpeg",
  "télécharger (2).jpeg",
];

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById(
      "main"
    ).style.backgroundImage = `url(${images[currentImageIndex]})`;
    console.log(images[currentImageIndex]);
    document.getElementById("main").style.backgroundSize = "cover";

    document.getElementById("text").innerHTML = `puppy ${
      currentImageIndex + 1
    } displayed`;

    currentImageIndex++;

    if (currentImageIndex >= images.length + 1) {
      console.log("reached");
      currentImageIndex = 0;
      document.getElementById("text").innerHTML =
        "Press Enter to change images.";
      document.getElementById("main").style.backgroundImage = "";
    }
  }
});
