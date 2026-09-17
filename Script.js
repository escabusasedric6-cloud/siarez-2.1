const skills = ["Basic HTML", "Basic CSS", "simple JavaScript", "Still Learning", "Willing to Learn"];
const hobbies = ["Watching One Piece", "Playing Online Games", "Listening Music"];
const journeyList = ["2025 - Started BSIT at CPSU", "2025 - Learned Basic HTML & CSS", "2026 - Made my first portfolio", "2026 - Still Learning Code"];
const typingWords = [ "BSIT Student", "Straw Hat Coder"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing");
  let current = typingWords[wordIndex];
  if (!isDeleting) {
    el.innerText = "I'm a " + current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) { isDeleting = true; setTimeout(typeEffect, 1000); return; }
  } else {
    el.innerText = "I'm a " + current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) { isDeleting = false; wordIndex++; if (wordIndex === typingWords.length) wordIndex = 0; }
  }
  setTimeout(typeEffect, isDeleting? 60 : 120);
}

function showJourney() {
  let box = document.getElementById("journeyBox");
  let i = 0;
  let text = "";
  while (i < journeyList.length) {
    text += '🏴‍☠️ ${journeyList[i]}<br>';
    i++;
  }
  box.innerHTML = text;
}

function showSkills() {
  let skillBox = document.getElementById("skillsBox");
  for (let s = 0; s < skills.length; s++) {
    skillBox.innerHTML += <span>${skills[s]}</span>;
  }
  let hobbyBox = document.getElementById("hobbyBox");
  for (let h = 0; h < hobbies.length; h++) {
    hobbyBox.innerHTML += <span>${hobbies[h]}</span>;
  }
}


function toggleMenu() {
  let nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}


showJourney();
showSkills();
typeEffect();
toggleMenu();