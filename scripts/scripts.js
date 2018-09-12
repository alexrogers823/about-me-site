const button = document.querySelector("button");
const topics = document.querySelectorAll("li");
const sidePhotos = document.querySelectorAll(".side-photo");
// const divContent = document.querySelectorAll("#bottom-section > div");
const divContent = document.querySelector("#bottom-section");
const scroll = document.querySelector("#scroll");
let placesShowing = false;
const bottomTitles = document.querySelectorAll("#bottom-section p");


// console.log(divContent);
console.log(bottomTitles);
const travelPictures = [
  ["Senegal", "picture"],
  ["United Kingdom", "picture"],
  ["Puerto Rico", "picture"],
  ["Cancun", "picture"],
  ["San Francisco", "picture"],
  ["New York City", "picture"]
]

const fontSizeMultiplier = 0.75;

button.onmouseover = () => {
  if (placesShowing) {
    button.textContent = "Click to see more about me";
  } else {
    button.textContent = "Click to see places I've been around the world!";
  }
  button.style.fontSize = `${fontSizeMultiplier}em`;
}

button.onmouseout = () => {
  if (placesShowing) {
    button.textContent = "View Me";
  } else {
    button.textContent = "View Places";
  }
  button.style.fontSize = `${1/fontSizeMultiplier}em`;
}

scroll.onclick = () => {
  nightMode();
}

function switchPhotos(side) {
  // something here
  let main = document.querySelector(".main-photo");
  let mainSrc = main.getAttribute("src");
  let mainAlt = main.getAttribute("alt");
  let sideSrc = side.getAttribute("src");
  let sideAlt = side.getAttribute("alt");
  main.setAttribute("src", sideSrc);
  main.setAttribute("alt", sideAlt);
  side.setAttribute("src", mainSrc);
  side.setAttribute("alt", mainAlt);
}

function nightMode() {
  let nightColor = "#4b0082"; //Dark purple
  let nightTextColor = "#f5f5f5"; //Smoke white
  let nightShadeOne = "#ffffff";
  let nightShadeTwo = "#0000cd";
  const body = document.querySelector("body");

  if (scroll.style.float === "left") {
    scroll.style.float = "right";
    // how tf does this make sense?? (url address)
    document.querySelector(":root").style.cssText = `--text-color: ${nightTextColor}`;
    // document.querySelector(":root").style.cssText = `--first-color: ${nightShadeOne}`;
    // document.querySelector(":root").style.cssText = `--second-color: ${nightShadeTwo}`;
    document.querySelector("html").style.backgroundImage = "url('./images/stars-background.jpg')";
    document.querySelector("#night").lastElementChild.textContent = "Day Mode";
    document.querySelector("#night").lastElementChild.style.backgroundColor = "#cdcdcd";
    document.querySelector("#night").lastElementChild.style.color = "black";
    body.style.backgroundColor = nightColor;
    body.style.border = `5px solid ${nightColor}`;
  } else {
    scroll.style.float = "left";
    document.querySelector(":root").style.cssText = '--text-color: #000000';
    document.querySelector(":root").style.cssText = "--first-color: #FFD700";
    document.querySelector(":root").style.cssText = "--second-color: #000000";
    document.querySelector("html").style.backgroundImage = "url('./images/music-background.jpg')";
    document.querySelector("#night").lastElementChild.textContent = "Night Mode";
    document.querySelector("#night").lastElementChild.style.backgroundColor = nightColor;
    document.querySelector("#night").lastElementChild.style.color = "white";
    body.style.backgroundColor = "#cdcdcd"; //gray
    body.style.border = "5px solid black";
  }
}

function viewPlaces(div) {
  placesShowing = !placesShowing;
  let facts;



  if (placesShowing) {
    div.innerHTML = `
    <div id="education">
    <div class="info left">
    <p>African and European Countries</p>
    <ul>
    <li>Senegal</li>
    <li>United Kingdom</li>
    </ul>
    </div>
    <div class="info-pictures right">
    <img src="./images/senegal-picture.jpg">
    <img src="./images/england.jpg">
    </div>
    </div>
    <div id="organizations">
    <div class="info-pictures left">
    <img src="./images/puerto-rico.jpg">
    <img src="./images/cancun.jpg">
    </div>
    <div class="info right">
    <p>Spanish-Speaking Countries</p>
    <ul>
    <li>Puerto Rico</li>
    <li>Cancun</li>
    </ul>
    </div>
    </div>
    <div id="interests">
    <div class="info left">
    <p>U.S. Cities</p>
    <ul>
    <li>San Francisco</li>
    <li>New York City</li>
    </ul>
    </div>
    <div class="info-pictures right">
    <img src="./images/san_francisco.jpg">
    <img src="./images/times_square.jpg">
    </div>
    </div>
    `
    facts = [...document.querySelectorAll("li")];
    // console.log(facts);
    facts.forEach(fact => fact.style.visibility = "visible");
  } else {
    div.innerHTML = `
    <div id="education">
      <div class="info left">
        <p>Education</p>
        <ul>
          <li><span>Emory University</span>: <span class="description">Business/Music Double Major</span></li>
          <li><span>Armstrong HS</span>: <span class="description">Graduated 3.68 with Honors</span></li>
          <li>And now...<span>DigitalCrafts!</span></li>
        </ul>
      </div>
      <div class="info-pictures right">
        <img src="images/emory-logo.jpg" alt="Emory logo">
        <img src="images/armstrong-original.png" alt="AHS logo">
        <img src="images/digitalcrafts-logo.png" alt="DigitalCrafts logo">
      </div>
    </div>

    <div id="organizations">
      <div class="info-pictures left">
        <img src="images/alpha-logo.png" alt="Fraternity logo">
        <img src="images/a2-fitness-logo.jpg" alt="A2 Fitness logo">
        <img src="images/bbbs-logo.jpg" alt="Big Brothers Big Sisters logo">
      </div>
      <div class="info right">
        <p>Organizations</p>
        <ul>
          <li><span>Alpha Phi Alpha Fraternity Inc.</span><span class="description">Active Member</span></li>
          <li><span>A2 Fitness.</span><span class="description">Co-Founder</span></li>
          <li><span>Big Brothers Big Sisters of Metro Atlanta.</span><span class="description">Volunteer and Big Brother</span></li>
        </ul>
      </div>
    </div>

    <div id="interests">
      <div class="info left">
        <p>Interests</p>
        <ul>
          <li><span>Music</span></li>
          <li><span>Gym Enthusiast</span></li>
          <li><span>Hiking</span></li>
          <li><span>Bowling</span></li>
          <li id="coding-interest">Coding of course!</li>
        </ul>
      </div>
      <div class="info-pictures right">
        <img src="images/sixteenth-note.png" alt="Sixteenth note">
        <img src="images/barbell.jpg" alt="Barbell picture">
        <img src="images/hiking.JPG" alt="hiking picture">
        <img src="images/bowling-original.jpg" alt="bowling picture">
      </div>
    </div>
    `
    facts = [...document.querySelectorAll("li")];
    // console.log(facts);
    facts.forEach(fact => fact.style.visibility = "visible");

  // let facts = [...document.querySelectorAll("li")];
  // console.log(facts);
  }
}

sidePhotos.forEach(photo => photo.addEventListener("click", () => switchPhotos(photo)));
bottomTitles.forEach(title => title.addEventListener("mouseover", () => {
  let children = [...title.nextElementSibling.children];
  // console.log(children);
  children.forEach(el => el.style.visibility = "visible");
}));

button.addEventListener("click", () => viewPlaces(divContent));
