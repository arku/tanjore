$(document).ready(function(){
  //Typed.js
  console.log("working");
  $(".element").typed({
    strings: ["Rice bowl of Tamil Nadu", "City known for its \nheritage", "Home to \n Tanjore paintings"],
    typeSpeed: 10,
    loop: true,
    startDelay: 500,
    backSpeed: 60,
    backDelay: 600,
    showCursor: true,
    cursorChar: "|"
  });


  var images = [
    {
      src: "temple-snap.jpg",
      alt: "Brihadeeswarar Temple"
    },
    {
      src: "maratha.jpg",
      alt: "Maratha Palace"
    },
    {
      src: "royal_palace_museum.jpg",
      alt: "Royal Palace Museum"
    },
    {
      src: "thanjavur_palace.jpg",
      alt: "Thanjavur Palace"
    },
    {
      src: "nandi.jpg",
      alt: "Nandi statue"
    },
    {
      src: "bell_tower.jpg",
      alt: "Bell Tower"
    },
    {
      src: "tamil_university.jpg",
      alt: "Tamil University"
    }
  ];

  // Function to build the gallery
  var buildGallery = function(){
    var galleryItemHTML = '<div class="col-sm-4"><div class="gallery-item"><div></div>';
    var imageHTML = '<img src="%data%" alt="%alt">';
    var galleryOverlayHTML = '<div class="overlay">%data%</div>'

    for index in images{
      item = images[index];
      $("#gallery").append(galleryItemHTML);

      var HTMLImage = imageHTML.replace("%data%", item.src);
      var HTMLImage = 
    } //end of for-in loop
  }// end of function


  //console.log(images);
  buildGallery();
});
