export function loadFooter(){
    fetch("./components/footer/footer.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeEnd",html);
        })
        .catch(err => console.error("Error loading header:", err));

}
    
