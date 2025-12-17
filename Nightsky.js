// Generate random stars that move upwards
const starsContainer = document.getElementById("stars");
const numberOfStars = 250; // Controls the amout of stars that appear, higer = more

for (let i = 0; i < numberOfStars; i++) {
const star = document.createElement("div");
star.className = "star";
        
// Random size for the stars 
const sizes = ["small", "small", "small", "medium", "medium", "large"];
star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        
// Random horizontal position
// math.random generates a number between 0 and 1. But because of * 100 it can now choose between 0 and 100. + "%" makes it into a procentage and star.style.left takes that and decides the posistion of the star.
// Let's say that math.random() gives me 0.42 that would mean that the pgrogram does this calculation 0.42 * 100 = 42, 42 + "%" = 42%. Which means it starts 42% from the left side.
star.style.left = Math.random() * 100 + "%";
        
// Start from random positions
star.style.top = Math.random() * 100 + "%";
        
// Random animation speed
const duration = Math.random() * 12 + 8;
star.style.animationDuration = duration + "s";
        
// Random speed delay 
star.style.animationDelay = -(Math.random() * duration) + "s";

// Tiny epilepsy attack...maybe (weight controls how often the colors appear)
// const palette makes it so I can store all of the colors for the stars here. 
// const means that a variable / assigned number can't change or be replaced, which means it will always be the same. And palette means just a word to describe a group of colors. 
const palette = [
{color: "#ffffff", weight: 0.25},
{color: "#4aff9fff", weight: 0.15},
{color: "#5ed9ffff", weight: 0.15}, 
{color: "#8b64ffff", weight: 0.15}, 
{color: "#ffb350ff", weight: 0.15}, 
{color: "#fe5699ff", weight: 0.15}  
];

// The "math" behind how often each color appears or something like that
const r = Math.random();
let acc = 0;
let chosen = palette[0].color;
for (const p of palette) {
acc += p.weight;
if (r <= acc) { chosen = p.color; break; }
}

//boooooo, did I scary you? Because this shit does

// This creates a glowing effect for the stars and sets their color 
const glowSize = Math.random() * 8 + 2; 
star.style.background = chosen;
star.style.boxShadow = `0 0 ${glowSize}px ${chosen}, 0 0 ${Math.max(1, glowSize/2)}px #ffffff1f`;

starsContainer.appendChild(star);
}

// Track open modals by type 
let openModals = {};
// z-index counter for stacking dragged modals
let modalCounter = 1000;

// How to open modal from icon
function openModal(popupType) {

//Makes it so that only one lil icon is open at once
if (openModals[popupType]) {
openModals[popupType].style.display = "none";
openModals[popupType].remove();
delete openModals[popupType];
}

// cloning the modal so we can have multiple windows open at once
var originalModal = document.getElementById("superdupercoolmodal");
var modal = originalModal.cloneNode(true);
modal.removeAttribute('id');
modal.setAttribute('data-type', popupType);
  
// grab all the stuff we need from the modal
var title = modal.querySelector('#modalTitle');
var text = modal.querySelector('#modalText');
var closeBtn = modal.querySelector('.close');
var modalframe = modal.querySelector('.modalframe');
  
// Text for each modals 
const injectedStyle = document.createElement("style");
document.head.appendChild(injectedStyle);

if (popupType === "about") {
title.textContent = "About";
// About 
text.innerHTML = `
Hai I’m <span style="color: #fff59d;">Lukas</span>, I’m currently a student at JENSEN Vocational College where I’m studying to become a Network Technician. In my current education I will gain experience about…
<ul>
<li>Core Network Operations – <em>Fundamentals of LAN/WAN, TCP/IP, OSI model, and connecting devices via VPN/SD-WAN</em></li>
<li>Network Design & Planning – <em>Principles for designing both local (LAN) and wide-area (WAN) data networks</em></li>
<li>Network Security - <em>Implementation of firewalls, SASE solutions, and evaluation of network vulnerabilities</em></li>
<li>Virtual & Cloud Networking - <em>Concepts of virtual switching, routing, and networking within cloud service environments</em></li>
<li> And so much more...</li>
</ul>
I’m currently looking for <a href="https://www.myh.se/in-english" target="_blank" style="color: #fff59d; ">LIA</a> Internship (Network Technician) for Spring term 2026 (April 6 - June 12). Are you or do you know someone who is looking for a LIA student in networking? If you are interested or want to get to know me better you can reach out to me at: <a href="mailto:lukassvensson761@gmail.com" style="color: #fff59d;">lukassvensson761@gmail.com</a>

<h4 ">Education</h4>
<p>
Vocational College Diploma in Network Technology <br>
<em>(JENSEN Vocational College, Graduating in 2026)</em>
</p>
<p>
High School Diploma in Social Science <br>
<em>(Osbeck High School, Graduated 2024)</em>
</p>

<h4>Other Interests</h4>
<ul>
<li>Baking</li>
<li>Learning about ancient civilizations / history</li>
<li>Video games (MOBAs, GSG and FPS)</li>
</ul>

<h4>Language Proficiency</h4>

<p>I have a native fluency in <span style="color: #fff59d;">English</span> and <span style="color: #fff59d;">Swedish</span>. 
I also speak a little bit of <span style="color: #fff59d;">German</span>, but it's at a very pre-school proficiency level! 
</p>
`;
} else if (popupType === "links") {
title.textContent = "Links";
// Links
text.innerHTML = `
<div class="icon-grid">

<div class="icon-item">
<a href="https://github.com/lukas362" target="_blank" class="Iconlink">
<i class="fa-brands fa-github" style="color: #c0d0e8;"></i>
</a>
<p>GitHub</p>
</div>

<div class="icon-item">
<a href="https://www.linkedin.com/in/lukassvensson-se/" target="_blank" class="Iconlink">
<i class="fa-brands fa-linkedin" style="color: #c0d0e8;"></i>
</a>
<p>LinkedIn</p>
</div>
</div>
`;
} else if (popupType === "work") {
title.textContent = "Work";
// Work
text.innerHTML = `

<h4><i class="fa-solid fa-ghost"></i> Koenigsegg</h4>
<div class="icon-item">
<p>
I worked as a property caretaker at Koenigsegg from 2025 to 2025. I had a diverse range of responsibilities, including:
<ul>
<li>Grounds & Facilities Maintenance</li>
<li>Operating machinery</li>
<li>Vineyard Maintenance</li>
</ul>
</p>

<h4><i class="fa-solid fa-church"></i> Church of Sweden</h4>
<div class="icon-item">
<p>
During my school breaks I started working as a Church Caretaker during the summer of 2023 as a seasonal job. And returned again in the summer of 2024 to do the same again. My responsibilities included:
<ul>
<li>Maintained church property and grounds</li>
<li>Operated maintenance machinery and technical equipment</li>
<li>Grave site care and restoration</li>
</ul>
</p>

<h4>Projects</h4>

<div class="work">Python / Coding projects (click to open)</div>

<div class="linktoproject" onclick="window.open('https://github.com/lukas362/Lukas-webbsite', '_blank')">
<span class="projectTitle">My very own website</span>
<span class="projectDescription">The website you are on right now</span>
</div>

<div class="linktoproject" onclick="window.open('https://github.com/lukas362/Multi_Port_Scanner', '_blank')">
<span class="projectTitle">Multi Port Scanner</span>
<span class="projectDescription">Python tool for network analysis & security</span>
</div>
<div class="linktoproject" onclick="window.open('https://github.com/lukas362/Dice-game-', '_blank')">
<span class="projectTitle">Dice Game</span>
<span class="projectDescription">Simple interactive dice game</span>
</div>
</div>

<div class="networkTitle">Network Projects</div>

<div class="pictures">
<img src="https://i.postimg.cc/hPYNw0Wy/Screenshot-2025-12-17-084457.png"
alt="picture of a simple network design"/>
<span class="bildtext">Nätverk med VLAN, NAT och routers-on-a-stick metod</span>
</div>


<div class="pictures">
<img src="https://i.postimg.cc/c6GHRkGW/Screenshot-2025-12-17-085016.png"
alt="picture of a simple network design"/>
<span class="bildtext">Hur ett litet företags nätverk kan se ut</span>
</div>

<div class="pictures">
<img src="https://i.postimg.cc/KYpPyTMR/Screenshot-2025-12-17-084745.png"
alt="picture of a simple network design"/>
<span class="bildtext">Spine leaf topology (ensuring redundancy)</span>
</div>

<div class="pictures">
<img src="https://i.postimg.cc/QMFB1yFN/Screenshot-2025-12-17-084527.png"
alt="picture of a simple network design"/>
<span class="bildtext">HSRP protocol makes sure a network always has a working default gateway (redundancy)</span>
</div>

<div class="linesplitter">
<p>See more of my projects and code on <a href="https://github.com/lukas362" target="_blank" style="color:#fff59d;">GitHub</a>.</p>
</div>

<br> </br>

<div style="text-align: left; margin-bottom: 20px;">
<h4 style="margin-top: 0;">Tools / Programs</h4>
<p> Skills may vary, but I've used theses programs at some point or have knowledge about them.</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Cisco Packet Tracer</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">GNS3</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Docker</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Wireshark</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Nmap</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">VirtualBox</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">VSC</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Github</span>
</div>

<h4>Programing languages</h4>
<p>I’ve used these programing languages and created a few projects with them. But I still have a lot to learn.</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">Python</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">HTML/CSS</span>
<span style="background: #4a5a7a; padding: 6px 12px; border-radius: 5px; font-size: 13px;">JavaScript</span>
</div>
</div>
`;
} else if (popupType === "contact") {
title.textContent = "Contact";
// Contact
text.innerHTML = `
<h4 style="text-align: center;">Send me an Email!</h4>
<p>The easiest way to contact me is through email! You can email me at:
<div style="text-align: center;">
<a href="mailto:lukassvensson761@gmail.com" style="color: #fff59d;">lukassvensson761@gmail.com</a>
</div>
`;
}
  
// Close button removes specific modal
if (closeBtn) {
closeBtn.onclick = function(e) {
e.preventDefault();
e.stopPropagation();
modal.style.display = "none";
modal.remove();
delete openModals[popupType];
return false;
};

// Touch support for mobile/iPad
closeBtn.addEventListener('touchend', function(e) {
e.preventDefault();
e.stopPropagation();
modal.style.display = "none";
modal.remove();
delete openModals[popupType];
return false;
}, { passive: false });
}
  
// Make specific modal draggable
makeDraggable(modal, modalframe);
  
// Store reference and show the modal
openModals[popupType] = modal;
modal.style.display = "block";
document.body.appendChild(modal);
}

// Thingi to make the grey part / bar draggable 
function makeDraggable(modalDiv, frameDiv) {
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const header = frameDiv.querySelector('.modalmenuthingi');
if (!header) return;

// How you can drag the modal with mouse
header.addEventListener('mousedown', (e) => {
isDragging = true;
const rect = frameDiv.getBoundingClientRect();
offsetX = e.clientX - rect.left;
offsetY = e.clientY - rect.top;
modalCounter += 10;
frameDiv.style.zIndex = modalCounter;
});
// How the modal moves with the mouse
document.addEventListener('mousemove', (e) => {
if (isDragging) {
const newX = e.clientX - offsetX;
const newY = e.clientY - offsetY;
frameDiv.style.left = newX + 'px';
frameDiv.style.top = newY + 'px';
frameDiv.style.transform = 'none';
}
});

document.addEventListener('mouseup', () => {
isDragging = false;
});

// How to hopefully move it move it with touch on phone or ipad or whatever
header.addEventListener('touchstart', (e) => {
if (!e.touches || e.touches.length === 0) return;

// Prevent the page from scrolling while dragging, in some way or another
e.preventDefault();
isDragging = true;
const touch = e.touches[0];
const rect = frameDiv.getBoundingClientRect();
offsetX = touch.clientX - rect.left;
offsetY = touch.clientY - rect.top;
modalCounter += 10;
frameDiv.style.zIndex = modalCounter;
}, { passive: false });

// How the modal can move with the touch of a finger on the screen 
document.addEventListener('touchmove', (e) => {
if (!isDragging) return;
if (!e.touches || e.touches.length === 0) return;
const touch = e.touches[0];
const newX = touch.clientX - offsetX;
const newY = touch.clientY - offsetY;
frameDiv.style.left = newX + 'px';
frameDiv.style.top = newY + 'px';
frameDiv.style.transform = 'none';

// Prevent scrolling while dragging
e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', () => {
isDragging = false;
});
}

function closeModal() {
var modal = document.getElementById("superdupercoolmodal");
if (modal) modal.style.display = "none";
}

// Popup info in the begginging to inform the user about the best view experience. aka localstorage
document.addEventListener("DOMContentLoaded", () => { // This code makes it so it waits for the page to fully load before running it
const popup = document.getElementById("firsttimepopup"); // creates the popup variable 
const closeBtn = document.getElementById("closepopup"); // creates the close button inside of the popup button. Basically you need to click this to close the popup

const hasSeenPopup = localStorage.getItem("hasSeenDesktopPopup"); // checks if the user has seen the popup before

// If the user hasn't seen the popup, then it will be shown

if (!hasSeenPopup) {
popup.style.display = "flex"; // shows the popup
}

closeBtn.addEventListener("click", () => { 
popup.style.display = "none"; 
localStorage.setItem("hasSeenDesktopPopup", "true"); // sets that the user has seen the popup with localstorage
});
});