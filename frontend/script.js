function showHome() {
    hideAll();
    document.getElementById("home").classList.remove("hidden");
}

function showExplore() {
    hideAll();
    document.getElementById("explore").classList.remove("hidden");
}

function showGallery(place) {
    hideAll();
    document.getElementById("gallery").classList.remove("hidden");

    let imagesDiv = document.getElementById("images");
    imagesDiv.innerHTML = "";

    let title = document.getElementById("galleryTitle");

    let data = {
        swiss: ["https://source.unsplash.com/200x200/?switzerland",
                "https://source.unsplash.com/200x200/?alps"],
        paris: ["https://source.unsplash.com/200x200/?paris",
                "https://source.unsplash.com/200x200/?eiffel"],
        dubai: ["https://source.unsplash.com/200x200/?dubai",
                "https://source.unsplash.com/200x200/?burjkhalifa"],
        bali: ["https://source.unsplash.com/200x200/?bali",
               "https://source.unsplash.com/200x200/?beach"],
        maldives: ["https://source.unsplash.com/200x200/?maldives",
                   "https://source.unsplash.com/200x200/?resort"]
    };

    title.innerText = place.toUpperCase();

    data[place].forEach(img => {
        let image = document.createElement("img");
        image.src = img;
        imagesDiv.appendChild(image);
    });
}

function openAuth() {
    document.getElementById("authModal").classList.remove("hidden");
}

function closeAuth() {
    document.getElementById("authModal").classList.add("hidden");
}

function hideAll() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("explore").classList.add("hidden");
    document.getElementById("gallery").classList.add("hidden");
}
