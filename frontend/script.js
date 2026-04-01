function loadDestinations() {

fetch("http://localhost/api.php")
.then(response => response.json())
.then(data => {

    let output = "";

    data.forEach(place => {
        output += `
        <div class="card">
            <img src="${place.image}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        </div>`;
    });

    document.getElementById("destinations").innerHTML = output;
});
}

