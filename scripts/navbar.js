/* Function to generate the navbar
*
*    USER MANUAL - HOW TO USE THIS NAV BAR SCRIPT
*
* ->> Add the following <script> tag in the head of your webpages:  (except homepage!! homepage nav bar is speciall!!, it has a spy scroll and smooth animations)
*   
    <script src="scripts/navbar.js"></script>
*
* ->> Add the following <script> tags to the end of your webpages' body: 
*
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
*
* This way, we can modify the nav bar across all pages without edditing all their individual HTML...
* Much better for team work.
*
*  Quick Search this File (use CTRL+F) for commented lines:
*  - Brand name [Change the Brand Name]
*  - main links (Adopt, About, Donate) [Change the main links]
*  - `find` Find menu item links / Drop down menu links [Change the drop-down menu]
*
*/
function generateNavbar() {

    // Create navbar container 
    let navbarContainer = document.createElement("div");
    navbarContainer.id = "nav-bar-container";
  
    // Create nav element
    let navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-sm fixed-top custom-navbar";
  
    // Create navbar brand
    let navbarBrand = document.createElement("a");
    navbarBrand.className = "navbar-brand";
    navbarBrand.href = "/index.html"; 
    navbarBrand.textContent = "Adopt-a-Pet"; //Brand Name Goes here
  
    // Create navbar toggler button
    let navbarToggler = document.createElement("button");
    navbarToggler.className = "navbar-toggler";
    navbarToggler.setAttribute("type", "button"); 
    navbarToggler.setAttribute("data-bs-toggle", "collapse");
    navbarToggler.setAttribute("data-bs-target", "#collapsibleNavId");
    navbarToggler.setAttribute("aria-controls", "collapsibleNavId");
    navbarToggler.setAttribute("aria-expanded", "false");
    navbarToggler.setAttribute("aria-label", "Toggle navigation");
  
    let navbarTogglerSpan = document.createElement("span");
    navbarTogglerSpan.className = "navbar-toggler-icon";
  
    // Create collapse div
    let navbarCollapse = document.createElement("div");
    navbarCollapse.className = "collapse navbar-collapse";
    navbarCollapse.id = "collapsibleNavId";
  
    // Create unordered list
    let navList = document.createElement("ul");
    navList.className = "navbar-nav me-auto mt-2 mt-lg-0";
  
    // Create nav bar items links / main links
    // This is all main the links we have
    let menuItems = [
      {text:"Adopt", href:"/adoptionguide.html"},
      {text:"About", href:"/contact.html"},
      {text:"Donate", href:"/donation.html"},
    ];

    // This iterator just populates the NAV list with the menuItems hashmap above ^
    menuItems.forEach(item => {
      let li = document.createElement("li");
      li.className = "nav-item";
  
      let a = document.createElement("a");
      a.className = "nav-link"; 
      a.href = item.href;
      a.textContent = item.text;
  
      li.appendChild(a);
      navList.appendChild(li);
    });

    // Find menu item
    let findItem = document.createElement("li");
    findItem.className = "nav-item dropdown";

    let findLink = document.createElement("a");
    findLink.className = "nav-link dropdown-toggle"; 
    findLink.href = "#";
    findLink.textContent = "Find";
    findLink.setAttribute("id", "dropdownId");
    findLink.setAttribute("data-bs-toggle", "dropdown");
    findLink.setAttribute("aria-haspopup", "true");

    let dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.setAttribute("aria-labelledby", "dropdownId");

    // Find menu item links /  Drop down menu links
    let findLinks = [
    { href:"/adoptionguide.html", text:"Adoption Guide" },
    //{ href:"/adoptionmanagerV1.html", text:"Make an Adoption (V1)"},
    { href:"/adoptionmanagerV2.html", text:"Make an Adoption"},
    { href:"/donation.html", text:"Make a Donation"},
    { href:"/contact.html", text:"Contact Us"},
    { href:"/FAQ.html", text:"See F.A.Q."},
    { href:"/index.html", text:"Homepage"},
    ];

    findLinks.forEach(link => {
    let item = document.createElement("a"); 
    item.className = "dropdown-item";
    item.href = link.href; 
    item.textContent = link.text;
    
    dropdownMenu.appendChild(item);
    });

    findItem.appendChild(findLink);
    findItem.appendChild(dropdownMenu);

    navList.appendChild(findItem);

    // Create search form
    let form = document.createElement("form");
    form.className = "d-flex my-2 my-lg-0";
    
    let input = document.createElement("input");
    input.type = "text";
    input.className = "form-control me-2";
    input.placeholder = "Search";
    
    let button = document.createElement("button");
    button.className = "btn btn-outline-success";
    button.textContent = "Search";
    button.style = "margin-right: 2%;";
    
    // Put everything together
    
    form.appendChild(input);
    form.appendChild(button);
  
    // Construct navbar component
    navbarToggler.appendChild(navbarTogglerSpan);  
    navbar.appendChild(navbarBrand);
    navbar.appendChild(navbarToggler);
    navbar.appendChild(navbarCollapse);
    navbarCollapse.appendChild(navList);
    navbarCollapse.appendChild(form); 
    navbarContainer.appendChild(navbar);
  
    // Add navbar to page
    document.body.insertBefore(navbarContainer, document.body.firstChild);
  
  }
  
  // Generate navbar on pageload
  document.addEventListener("DOMContentLoaded", generateNavbar);