// Wait for page load
window.addEventListener('DOMContentLoaded', function() {

    var maxScreenWidth = 480;

    // First Carousel
    if (window.innerWidth >= maxScreenWidth) {
        for(i = 0; i<3;i ++){
            createCard("#carouselCardHolder1",i+1);
        
            createCard("#carouselCardHolder2",4+i);
        }
    } else { //mobile screen
        createCarouselItem("carousel-listbox");
        for(i = 0; i<2;i ++){
            createCard("#carouselCardHolder1",i+1);
            createCard("#carouselCardHolder2",3+i);
            createCard("#carouselCardHolder3",5+i);
        }
    }

    fetch("data/animals.json")
        .then(response => response.json())
        .then(data => {
            // Update the first 6 cards with data
            for (let i = 0; i < 7; i++) {
                const cardId = `animalCard${i}`;
                const animal = data[i];

                // Check if the card element exists
                const cardElement = document.getElementById(cardId);
                if (cardElement) {
                    // Update the content of the existing elements
                    updateCardContent(cardElement, animal);
                }
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

function createCard(targetID, integer){

    // Get target container uses the targetID 
    var targetContainer = document.querySelector(targetID);
  
    // Create card wrapper div
    var cardColumn = document.createElement("div");
    cardColumn.classList.add("col");
  
    // Create card 
    var card = document.createElement("div");
    card.classList.add("card","border-0");
    card.id = "animalCard"+integer;
  
    // Card image
    var img = document.createElement("img");
    img.src = "images/no_picture.png"; 
    img.alt = "Animal image";
    img.classList.add("card-img-top");
  
    // Card body
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Card title 
    var title = document.createElement("p");
    title.classList.add("card-title");  
    title.textContent = "Animal Name";
  
    // Card text
    var text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = "Animal info.";
  
    // Construct card
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardColumn.appendChild(card);

    
  
    // Add to target container
    targetContainer.appendChild(cardColumn);
}

function createCarouselItem(targetID){

    // Get target container
    var targetContainer = document.getElementById(targetID);

    // Create carousel-item div
    var carouselDiv = document.createElement("div");
    carouselDiv.classList.add("carousel-item");

    // Create carouselCardHolder3 div
    var carouselCardHolder3 = document.createElement("div");
    carouselCardHolder3.classList.add("row", "justify-content-center", "align-items-center", "g-2");
    carouselCardHolder3.id = 'carouselCardHolder3';
    
    // Construct carousel
    carouselDiv.appendChild(carouselCardHolder3);
    targetContainer.appendChild(carouselDiv);

}

function updateCardContent(cardElement, animal) {
    // Update the content of the existing elements
    const imgElement = cardElement.querySelector(".card-img-top");
    const titleElement = cardElement.querySelector(".card-title");
    const bioElement = cardElement.querySelector(".card-text");

    // Update image source
    if (imgElement && animal.image) {
        // this changes the script to work with Guillaume's method of finding animal pcitures
        imgElement.src = "images/animals/"+animal.species.toLowerCase().replace(/\s/g, "")+animal.id+".jpg";
        imgElement.alt = animal.name;
    }

    // Update title text
    if (titleElement) {
        titleElement.textContent = animal.name;
    }

    // Update description text
    if (bioElement) {
        bioElement.textContent = animal.age+" yrs.";
    }
}