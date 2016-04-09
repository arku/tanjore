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
      src: "images/temple-snap.jpg",
      alt: "Brihadeeswarar Temple"
    },
    {
      src: "images/maratha.jpg",
      alt: "Maratha Palace"
    },
    {
      src: "images/royal_palace_museum.jpg",
      alt: "Royal Palace Museum"
    },
    {
      src: "images/thanjavur_palace.jpg",
      alt: "Thanjavur Palace"
    },
    {
      src: "images/nandi.jpg",
      alt: "Nandi statue"
    },
    {
      src: "images/bell_tower.jpg",
      alt: "Bell Tower"
    },
    {
      src: "images/tamil_university.jpg",
      alt: "Tamil University"
    },
    {
      src: "images/cholapuram.jpg",
      alt: "Gangaikonda Cholapuram"
    },
    {
      src: "images/library.jpg",
      alt: "Saraswathi Mahal Library"
    }

  ];

  // Function to build the gallery
  var buildGallery = function(){
    var galleryItemHTML = '<div class="col-xs-6 col-sm-4"><div class="gallery-item"><div></div>';
    var imageHTML = '<img src="%data%" alt="%alt">';
    var galleryOverlayHTML = '<div class="overlay">%data%</div>';
    var HTMLImage, overlayHTML;

    for(index in images){
      item = images[index];
      $("#gallery .row").append(galleryItemHTML);

      HTMLImage = imageHTML.replace("%data%", item.src);
      HTMLImage = HTMLImage.replace("%alt%", item.alt);
      overlayHTML = galleryOverlayHTML.replace("%data%", item.alt);

      itemHTML = HTMLImage + overlayHTML;

      //Appending a single gallery item
      $(".gallery-item:last").append(itemHTML);

    } //end of for-in loop
  }// end of function


  //console.log(images);
  buildGallery();
});
