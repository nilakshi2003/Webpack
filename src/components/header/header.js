export function loadHeader() {
    fetch("./components/header/header.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("afterbegin", html); // Inserts header at the top of the body
            
            // Wait for DOM to update with the fetched header
            const hamburger = document.getElementById("hamburger");
            const nav = document.querySelector(".header__nav");

            if (hamburger && nav) {
                hamburger.addEventListener("click", function () {
                    nav.classList.toggle("active");
                });
            }
        })
        .catch(err => console.error("Error loading header:", err));
}