$(document).ready(function(){
  //Typed.js
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


 // Data for gallery
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

  // Data to build history
  var history = {sections:
  [
    {
      title:"Origin of Thanjavur",
      id:"origin",
      content:"<p>According to local legend, the word Thanjavur is derived from 'Tanjan', an asura (giant) in Hindu mythology who was killed in what is now Thanjavur by the Hindu god Neelamegha Perumal, a form of Vishnu. The word Thanjavur is indeed a Tamil name.'Than'-cold, 'chei'-farmland, 'ur'- city, a city surrounded by cold farmlands.The word 'Thancheiur' has become 'Thanjavur'.</p><p>There are no references to Thanjavur in any of the Sangam period (third century BC to fourth century AD) Tamil records, though some scholars believe that the city has existed since that time. Kovil Venni, situated 15 miles (24 km) to the east of the city, was the site of the Battle of Venni between the Chola king Karikala and a confederacy of the Cheras and the Pandyas. The Cholas seemed to have faced an invasion of the Kalabhras in the third century AD after which the kingdom faded into obscurity. The region around present day Thanjavur was conquered by the Mutharayars during sixth century, who ruled it up to 849.</p>"
    },
    {
      title:"Rise of Cholas",
      id:"cholas",
      content: "<p>The Cholas came to prominence once more through the rise of the Medieval Chola monarch Vijayalaya (841–878) in about 850. Vijayalaya conquered Thanjavur from the Mutharayar king Elango Mutharayar and built a temple dedicated to Hindu goddess Nisumbhasudani. His son Aditya I (871–901) consolidated the hold over the city. The Rashtrakuta king Krishna II (878–914), a contemporary of the Chola king Parantaka I (907–950), claims to have conquered Thanjavur, but there are no records to support the claim. Gradually, Thanjavur became the most important city in the Chola Empire and remained its capital till the emergence of Gangaikonda Cholapuram in about 1025. During the first decade of the eleventh century, the Chola king Raja Raja Chola I (985–1014) constructed the Brihadeeswarar Temple at Thanjavur. The temple is considered to be one of the best specimens of South Indian temple architecture.</p>"
    },
    {
      title:"Decline of Cholas",
      id:"pandyas",
      content:"<p>When the Chola Empire began to decline in the 13th century, the Pandyas from the south invaded and captured Thanjavur twice, first during 1218–19 and then during 1230. During the second invasion, the Chola king Rajaraja III (1216–56) was set in exile and he sought the help of the Hoysala king Vira Narasimha II (1220–35) to regain Thanjavur. Thanjavur was eventually annexed along with the rest of the Chola kingdom by the Pandya king Maravarman Kulasekara Pandyan I (1268–1308) in 1279 and the Chola kings were forced to accept the suzerainty of the Pandyas. The Pandyas ruled Thanjavur from 1279 to 1311 when their kingdom was raided and annexed by the forces of Malik Kafur (1296–1306) and Delhi Sultanate. The Sultanate extended its authority directly over the conquered regions from 1311 to 1335 and then through the semi-independent Ma'bar Sultanate from 1335 to 1378. Starting from the 1350s, the Ma'bar Sultanate was steadily absorbed into the rising Vijayanagar Empire.</p>"
    },
    {
      title:"Nayaks rule",
      id:"nayak",
      content:"<p>Srirangam between 1365 and 1371. Deva Raya's inscription dated 1443, Thirumala's inscription dated 1455 and Achuta Deva's land grants dated 1532 and 1539 attest Vijayanagar's dominance over Thanjavur. Sevappa Nayak (1532–80), the Vijayanagar viceroy of Arcot, established himself as an independent monarch in 1532 (1549, according to some sources) and founded the Thanjavur Nayak kingdom. Achuthappa Nayak (1560–1614), Raghunatha Nayak (1600–34) and Vijaya Raghava Nayak (1634–73) are some of the important rulers of the Nayak dynasty who ruled Thanjavur. Thanjavur Nayaks were notable for their patronage of literature and arts. The rule of the dynasty came to an end when Thanjavur fell to the Madurai Nayak king Chokkanatha Nayak (1662–82) in 1673. Vijaya Raghunatha Nayak, the son of Chokkanatha, was killed in a battle and Chokkanatha's brother Alagiri Nayak (1673–75) was crowned as the ruler of the empire.</p>"
    },
    {
      title:"Reign of Marathas",
      id:"serfoji",
      content:"<p>Thanjavur was successfully conquered in 1674 by Ekoji I (1675–84), the Maratha feudatory of the Nawab of Bijapur and half-brother of Shivaji (1627/30-80) of the Bhonsle dynasty. Ekoji founded the Thanjavur Maratha kingdom which ruled Thanjavur till 1855. The Marathas exercised their sovereignty over Thanjavur throughout the last quarter of the 17th and the whole of the 18th century. The Maratha rulers patronized Carnatic music. In 1787, Amar Singh, the regent of Thanjavur, deposed the minor Raja, his nephew Serfoji II (1787–93) and captured the throne. Serfoji II was restored in 1799 with the assistance of the British, who induced him to relinquish the administration of the kingdom and left him in charge of Thanjavur fort and surrounding areas. The kingdom was eventually absorbed into British India in 1855 by the Doctrine of Lapse when Shivaji II (1832–55), the last Thanjavur Maratha ruler, died without a legitimate male heir. The British referred to the city as Tanjore in their records. Five years after its annexation, the British replaced Negapatam (modern-day Nagapattinam) with Thanjavur as the seat of the district administration. Under the British, Thanjavur emerged as an important regional centre. The 1871 India census recorded a population of 52,171, making Thanjavur the third largest city in the Madras Presidency. After India's independence, Thanjavur continued as the district headquarters.</p>"
    }
  ]
}; //End of history object


var panelHTML = '<div class="panel panel-default"><div class="panel-heading" role="tab"><h3 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#%id%" aria-expanded="true" aria-controls="%id%"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;%title%</a></h3></div><div id="%id%" class="panel-collapse collapse in" role="tabpanel"><div class="panel-body">%content%</div></div></div>';

//Function to build the history accordion
var buildHistory = function(history){

    for(index in history.sections){
      section = history.sections[index];

      var HTMLPanel = panelHTML.replace(/%id%/g, section.id);
      HTMLPanel = HTMLPanel.replace("%title%", section.title);
      HTMLPanel = HTMLPanel.replace("%content%", section.content);

      //Remove in class from the second section so that only one section shows up
      if(index >0){
        HTMLPanel = HTMLPanel.replace("collapse in", "collapse");
      }

      //Append the panel to the accordion
      $("#accordion").append(HTMLPanel);
    } //end of for-in loop
}//End of function buildHistory()

buildHistory(history);


//accordion
  /*$("#accordion").on('shown.bs.collapse', function(event){
    var id = event.target.id;
    var target = event.target.id + " " + "span.glyphicon.glyphicon-chevron-right";
    console.log(target);
    selector = "div.panel-heading ~ " + id;
    console.log(selector);

    $("span.glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-right-rotate");
    console.log("rotated");
  });

  $("#accordion").on('hidden.bs.collapse', function(event){
    var id = event.target.id;
    var target = event.target.id + " " + "span.glyphicon.glyphicon-chevron-right";
    console.log(target);
    selector = "div.panel-heading ~ " + id;
    console.log(selector);

    $(selector).addClass("red-background");
    console.log("back to normal");
  });*/



});
