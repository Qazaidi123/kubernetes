function loadDestinations() {
    const data = [
        { name: "Paris", img: "https://source.unsplash.com/300x200/?paris" },
        { name: "Dubai", img: "https://source.unsplash.com/300x200/?dubai" },
        { name: "New York", img: "https://source.unsplash.com/300x200/?newyork" },
        { name: "Goa", img: "https://source.unsplash.com/300x200/?goa" },
        { name: "Tokyo", img: "https://source.unsplash.com/300x200/?tokyo" }
    ];

    const container = document.getElementById("destinations");
    container.innerHTML = "";

    data.forEach(place => {
        container.innerHTML += `
            <div class="card">
                <img src="${place.img}" />
                <h3>${place.name}</h3>
            </div>
        `;
    });
}
