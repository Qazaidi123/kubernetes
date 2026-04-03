let selected = "";

// Hide all sections
function hideAll(){
    document.getElementById("home").classList.add("hidden");
    document.getElementById("explore").classList.add("hidden");
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("booking").classList.add("hidden");
    document.getElementById("admin").classList.add("hidden");
}

// Show Home
function showHome(){
    hideAll();
    document.getElementById("home").classList.remove("hidden");
}

// Show Explore
function showExplore(){
    hideAll();
    document.getElementById("explore").classList.remove("hidden");
}

// Show Gallery
function showGallery(place){
    hideAll();
    selected = place;

    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("title").innerText = place;

    let data = {
        Switzerland:[
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300",
            "https://images.unsplash.com/photo-1500048993959-dc8c58c0d9b7?w=300"
        ],
        Paris:[
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300"
        ],
        Dubai:[
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=300",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300"
        ],
        Bali:[
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300",
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=300"
        ],
        Maldives:[
            "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c1?w=300",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300"
        ],
        Thailand:[
            "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=300",
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=300"
        ]
    };

    let box = document.getElementById("images");
    box.innerHTML = "";

    data[place].forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        box.appendChild(img);
    });
}

// Go to Booking
function goBooking(){
    hideAll();
    document.getElementById("booking").classList.remove("hidden");
}

// Save Booking
function confirmBooking(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch("api.php", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            name: name,
            email: email,
            destination: selected
        })
    })
    .then(res => res.text())
    .then(() => {
        alert("Booking Saved");
    });
}

// Load bookings (Admin)
function loadBookings(){
    fetch("api.php")
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("list");
        list.innerHTML = "";

        data.forEach(b => {
            let li = document.createElement("li");
            li.innerText = b.name + " booked " + b.destination;
            list.appendChild(li);
        });
    });
}

// Login
function login(){
    let email = prompt("Enter Email");

    fetch("api.php", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({login:true, email:email})
    })
    .then(res => res.json())
    .then(data => {
        if(data.role === "admin"){
            hideAll();
            document.getElementById("admin").classList.remove("hidden");
        } else {
            alert("Logged in as User");
        }
    });
}
