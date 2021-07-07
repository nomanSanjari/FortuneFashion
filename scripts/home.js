function screenQuery() {
    const screenWidth = window.matchMedia("(max-width: 700px)")
    if (screenWidth.matches) {
        return true;
    }
    else {
        return false;
    }
}

const navbarContainer = document.getElementById("navbar-container");

const mobileMenuHTML = `
<!--MOBILE MENU-->
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Home
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div><a class="text-decoration-none" href="products.html">Products</a></div>
                        <div><a class="text-decoration-none" href="contact.html">Contact Us</a></div>
                        <div><a class="text-decoration-none" href="about.html">About Us</a></div>
                    </div>
                </div>
            </div>
        </div>
        <!--MOBILE MENU-->
`;

if (screenQuery()) {
    navbarContainer.innerHTML = "";
    navbarContainer.innerHTML = mobileMenuHTML;
}