function screenQuery() {
    const screenWidth = window.matchMedia("(max-width: 700px)")
    if (screenWidth.matches) {
        console.log("True");
        return true;
    }
    else {
        return false;
    }
}

const navbarContainer = document.getElementById("navbar-container");
const mapContainer = document.getElementById("map-container");

const mobileMenuHTML = `
<!--MOBILE MENU-->
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Contact Us
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div><a class="text-decoration-none" href="home.html">Home</a></div>
                        <div><a class="text-decoration-none" href="products.html">Products</a></div>
                        <div><a class="text-decoration-none" href="about.html">About Us</a></div>
                    </div>
                </div>
            </div>
        </div>
        <!--MOBILE MENU-->
`;

const mobileMap = `
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5131291879725!2d90.36449011498297!3d23.835906084547393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c137d174cb67%3A0x3e29d27569e96f9a!2sFORTUNE%20FASHION!5e0!3m2!1sen!2sbd!4v1625456850378!5m2!1sen!2sbd"
    width="${screen.width - 30}" height="400" style="border:0; padding: 0;" allowfullscreen="true"
    loading="lazy"></iframe>
`;

if (screenQuery()) {
    navbarContainer.innerHTML = "";
    navbarContainer.innerHTML = mobileMenuHTML;
    mapContainer.innerHTML = "";
    mapContainer.innerHTML = mobileMap;
}

