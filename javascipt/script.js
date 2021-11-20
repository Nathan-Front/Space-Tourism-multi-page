//nav links functions
const home = document.getElementById("home");
const destination = document.getElementById("destination");
const crew = document.getElementById("crew");
const technology = document.getElementById("technology");
//section content
const home_content = document.getElementById("home-content");
const destination_content = document.getElementById("destination-content");
const crew_content = document.getElementById("crew-content");
const technology_content = document.getElementById("technology-content");
const body = document.body;
home.addEventListener('click', function() {
    home_content.style.display = "flex";
    destination_content.style.display = "none";
    crew_content.style.display = "none";
    technology_content.style.display = "none";
    if(body.clientWidth > 1025){
        body.style.backgroundImage = 'url(images/home/background-home-desktop.jpg)';
    }else if (body.clientWidth <= 1025 && body.clientWidth > 540){
        body.style.backgroundImage = 'url(images/home/background-home-tablet.jpg)';
    }else{
        body.style.backgroundImage = 'url(images/home/background-home-mobile.jpg)';
        burgerClose.style.display = "none";
        burger.style.display = "flex";
        navMenu.classList.remove("navActive");
    }
});
destination.addEventListener('click', function() {
    home_content.style.display = "none";
    destination_content.style.display = "flex";
    crew_content.style.display = "none";
    technology_content.style.display = "none";
    if(body.clientWidth > 1025){
        body.style.backgroundImage = 'url(images/destination/background-destination-desktop.jpg)';
    }else if (body.clientWidth <= 1025 && body.clientWidth > 540){
        body.style.backgroundImage = 'url(images/destination/background-destination-tablet.jpg)';
    }else{
        body.style.backgroundImage = 'url(images/destination/background-destination-mobile.jpg)';
        burgerClose.style.display = "none";
        burger.style.display = "flex";
        navMenu.classList.remove("navActive");
    }
});
crew.addEventListener('click', function() {
    home_content.style.display = "none";
    destination_content.style.display = "none";
    crew_content.style.display = "flex";
    technology_content.style.display = "none";
    if(body.clientWidth > 1025){
        body.style.backgroundImage = 'url(images/crew/background-crew-desktop.jpg)';
    }else if (body.clientWidth <= 1025 && body.clientWidth > 540){
        body.style.backgroundImage = 'url(images/crew/background-crew-tablet.jpg)';
    }else{
        body.style.backgroundImage = 'url(images/crew/background-crew-mobile.jpg)';
        burgerClose.style.display = "none";
        burger.style.display = "flex";
        navMenu.classList.remove("navActive");
    }
});
technology.addEventListener('click', function() {
    home_content.style.display = "none";
    destination_content.style.display = "none";
    crew_content.style.display = "none";
    technology_content.style.display = "flex";
    if(body.clientWidth > 1025){
        body.style.backgroundImage = 'url(images/technology/background-technology-desktop.jpg)';
    }else if (body.clientWidth <= 1025 && body.clientWidth > 540){
        body.style.backgroundImage = 'url(images/technology/background-technology-tablet.jpg)';
    }else{
        body.style.backgroundImage = 'url(images/technology/background-technology-mobile.jpg)';
        burgerClose.style.display = "none";
        burger.style.display = "flex";
        navMenu.classList.remove("navActive");
    }
});
//Mobile menu function
const burger = document.getElementById("burgerMenuOpen");
const burgerClose = document.getElementById("burgerMenuClose");
const navMenu = document.querySelector("#menuLinks");

burger.addEventListener('click', function(){
    burger.style.display = "none";
    burgerClose.style.display = "flex";
    if(navMenu.classList.contains("navActive")){
        navMenu.classList.remove("navActive");
    }
    else{
        navMenu.classList.add("navActive");
    }
    return;
});
burgerClose.addEventListener('click', function(){
    burgerClose.style.display = "none";
    burger.style.display = "flex";
    if(navMenu.classList.contains("navActive")){
        navMenu.classList.remove("navActive");
    }
    else{
        return;
    }
    return;
});

//function for destination index/section
const destination_head = document.getElementById("destination-head");
const destination_details = document.getElementById("destination-details");
const destination_distance = document.getElementById("destination-distance");
const destination_travel = document.getElementById("destination-travel");
const destination_image = document.getElementById("destination-image");
const locator = document.getElementsByClassName("location");
const destinationSlides = document.getElementById("moon");
const titan = document.getElementById("titan");
/*
function moon() {
    destination_head.innerText = "moon";
    destination_details.innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destination_distance.innerText = "384,400 km";
    destination_travel.innerText = "3 days";
    destinationSlides.style.marginLeft = "0%";
}
function mars() {
    destination_head.innerText = "mars";
    destination_details.innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    destination_distance.innerText = "225 mil. km";
    destination_travel.innerText = "9 months";
    destinationSlides.style.marginLeft = "-47%";
}
function europa() {
    destination_head.innerText = "europa";
    destination_details.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    destination_distance.innerText = "628 mil. km";
    destination_travel.innerText = "3 years";
    destinationSlides.style.marginLeft = "-94%";
}
function titan() {
    destination_head.innerText = "titan";
    destination_details.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    destination_distance.innerText = "1.6 bil. km";
    destination_travel.innerText = "7 years"; 
    destinationSlides.style.marginLeft = "-141%";
}*/
function travelDestination(n){
    if (n === 1) {
        destination_head.innerText = "moon";
        destination_details.innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        destination_distance.innerText = "384,400 km";
        destination_travel.innerText = "3 days";
       // destinationSlides.style.marginLeft = "0%";
    }
    else if (n === 2) {
        destination_head.innerText = "mars";
        destination_details.innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        destination_distance.innerText = "225 mil. km";
        destination_travel.innerText = "9 months";
       // destinationSlides.style.marginLeft = "-1%";
    }
    else if (n === 3) {
        destination_head.innerText = "europa";
        destination_details.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        destination_distance.innerText = "628 mil. km";
        destination_travel.innerText = "3 years";
       // destinationSlides.style.marginLeft = "-2%";
    }
    else if (n === 4) {
        destination_head.innerText = "titan";
        destination_details.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        destination_distance.innerText = "1.6 bil. km";
        destination_travel.innerText = "7 years"; 
       // destinationSlides.style.marginLeft = "-3%";
    }
    else{return;}
}


//function for crew index/section
const crewImage = document.getElementById("crew-image");
var currentContent = 1;
crewContent(currentContent);

function currentCrew(n) {
    crewContent(currentContent = n);
    if (n === 1) {
        crewImage.src = "images/crew/image-douglas-hurley.png";
    }else if (n === 2) {
        crewImage.src = "images/crew/image-victor-glover.png";
    }else if (n === 3) {
        crewImage.src = "images/crew/image-mark-shuttleworth.png";
    }else{
        crewImage.src = "images/crew/image-anousheh-ansari.png";
    }
}

function crewContent(n) {
const currentcrew = document.getElementsByClassName("slides");
const dot = document.getElementsByClassName("dot");
var i;
    if (n > currentcrew.length) {
        currentContent = 1;
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    dot[currentContent - 1].className += " active";
}

//function for technology index/section
const techInfo1 = document.getElementById("technology1");
const launch = document.getElementById("launch");
const spaceport = document.getElementById("spaceport");
const capsule = document.getElementById("capsule");
const techInfo = document.getElementsByClassName("techy-tech");

var currentDot = 1;
techy(currentDot);
function currentTech(x){
    techy(currentDot = x);
    if (x === 1){
        techInfo1.style.marginLeft = "0%";
        if (body.clientWidth <= 1025) {
            launch.src = "images/technology/image-launch-vehicle-landscape.jpg";
        } else {return;}
    }
    else if (x === 2){
        techInfo1.style.marginLeft = "-125%";
        if (body.clientWidth <= 1025) {
            techInfo1.style.marginLeft = "-100%";
            spaceport.src = "images//technology/image-spaceport-landscape.jpg";
        }
        else {return;}
    }
    else if (x === 3){
        techInfo1.style.marginLeft = "-250%";
        if (body.clientWidth <= 1025) {
            techInfo1.style.marginLeft = "-200%";
            capsule.src = "images/technology/image-space-capsule-landscape.jpg";
        }
        else {return;}
    }
    else {return false;}
}
function techy(x) {
    const techImageContent = document.getElementsByClassName("techy-tech");
    const techDot = document.getElementsByClassName("tech-dot");
    var i;
    if (x > techImageContent.length) {
        currentDot = 1;
    }
    for (i = 0; i < techDot.length; i++) {
        techDot[i].className = techDot[i].className.replace(" techy-dot", "");
    }
    techDot[currentDot - 1].className += " techy-dot";
}

