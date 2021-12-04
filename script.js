
// get controller buttons
const welcomeBtn = document.getElementById('welcome-btn');
const aboutMeBtn = document.getElementById('about-me-btn');
console.log('aboutMeBtn', aboutMeBtn);
const whyFacBtn = document.getElementById('why-fac-btn');
const promptsBtn = document.getElementById('prompts-btn');
const linkBtn = document.getElementById('links-btn');

// get display text
const welcomeDisplay = document.getElementById("welcome-display");
const aboutMeDisplay = document.getElementById("about-me-display");
console.log('aboutMeDisplay', aboutMeDisplay);
const whyFacDisplay = document.getElementById("why-fac-display")
const promptsDisplay = document.getElementById("prompts-display");
const linksDisplay = document.getElementById("links-display");

//controller btn show/hide sections/display

const toggleWelcomeeDisplay = () => {

    whyFacDisplay.style.display = "none";
    promptsDisplay.style.display = "none";
    linksDisplay.style.display = "none";
    aboutMeDisplay.style.display = "none";
    welcomeDisplay.style.display = (welcomeDisplay.style.display === "flex") ? "none" : "flex";
}

const toggleAboutMeDisplay = () => {
    welcomeDisplay.style.display = "none";
    whyFacDisplay.style.display = "none";
    promptsDisplay.style.display = "none";
    linksDisplay.style.display = "none";
    aboutMeDisplay.style.display = (aboutMeDisplay.style.display === "flex") ? "none" : "flex";
}
const toggleWhyFacDisplay = () => {;
    welcomeDisplay.style.display = "none";
    aboutMeDisplay.style.display = "none";
    promptsDisplay.style.display = "none";
    linksDisplay.style.display = "none";
    whyFacDisplay.style.display = (whyFacDisplay.style.display === "flex") ? "none" : "flex";
}
const togglePromptsCarouselDisplay = () => {
    welcomeDisplay.style.display = "none";
    aboutMeDisplay.style.display = "none";
    whyFacDisplay.style.display = "none";
    linksDisplay.style.display = "none";
    promptsDisplay.style.display = (promptsDisplay.style.display === "flex") ? "none" : "flex";
}
const toggleLinksDisplay = () => {  
    welcomeDisplay.style.display = "none";
    aboutMeDisplay.style.display = "none";
    whyFacDisplay.style.display = "none";
    promptsDisplay.style.display = "none";
    linksDisplay.style.display = (linksDisplay.style.display === "flex") ? "none" : "flex";
}

// eventListener on click 

welcomeBtn.addEventListener("click", toggleWelcomeeDisplay)
aboutMeBtn.addEventListener("click", toggleAboutMeDisplay);
whyFacBtn.addEventListener("click", toggleWhyFacDisplay);
promptsBtn.addEventListener("click", togglePromptsCarouselDisplay);
linkBtn.addEventListener("click", toggleLinksDisplay);
