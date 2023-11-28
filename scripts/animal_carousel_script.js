document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data from the hosted file
    fetch("data/animals.json")
        .then(response => response.json())
        .then(data => {
            // Update the first 8 cards with data
            for (let i = 0; i < 9; i++) {
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

function updateCardContent(cardElement, animal) {
    // Update the content of the existing elements
    const imgElement = cardElement.querySelector(".card-img-top");
    const titleElement = cardElement.querySelector(".card-title");
    const bioElement = cardElement.querySelector(".card-text");

    // Update image source
    if (imgElement && animal.image) {
        imgElement.src = animal.image;
        imgElement.alt = animal.name;
    }

    // Update title text
    if (titleElement) {
        titleElement.textContent = animal.name;
    }

    // Update description text
    if (bioElement) {
        bioElement.textContent = animal.species +" "+animal.age+" years old.";
    }
}
