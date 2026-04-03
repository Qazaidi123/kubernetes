let selected = "";

function hideAll(){
    ["home","explore","gallery","booking","admin"]
    .forEach(id => document.getElementById(id).classList.add("hidden"));
}

function showHome(){ hideAll(); document.getElementById("home").classList.remove("hidden"); }
function showExplore(){ hideAll(); document.getElementById("explore").classList.remove("hidden"); }

function showGallery(place){
    hideAll();
    selected = place;
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("title").innerText = place;

    let data = {
        Switzerland:["snow","mountain","lake","alps"],
        Paris:["eiffel","paris street","louvre"],
        Dubai:["burj khalifa","desert","dubai marina"],
        Bali:["bali beach","temple","island"],
        Maldives:["resort","beach","water villa"],
        Thailand:["phuket","temple thailand","beach thailand"]
    };

    let box = document.getElementById("images");
    box.innerHTML = "";

    data[place].forEach(tag=>{
        let img = document.createElement("img");
        img.src = `https://source.unsplash.com/300x200/?${tag}`;
        box.appendChild(img);
    });
}

function goBooking(){
    hideAll();
    document.getElementById("booking").classList.remove("hidden");
}

function confirmBooking(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch("api.php", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name,email,destination:selected})
    })
    .then(res=>res.text())
    .then(()=> alert("Booking Saved"));
}

function loadBookings(){
    fetch("api.php")
    .then(res=>res.json())
    .then(data=>{
        let list = document.getElementById("list");
        list.innerHTML="";
        data.forEach(b=>{
            let li=document.createElement("li");
            li.innerText = `${b.name} booked ${b.destination}`;
            list.appendChild(li);
        });
    });
}
