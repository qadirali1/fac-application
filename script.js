
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

// footer buttons logic
const welcomeBtnFooter = document.getElementById('welcome-btnfooter');
const aboutMeBtnFooter = document.getElementById('about-me-btnfooter');
const whyFacBtnFooter = document.getElementById('why-fac-btnfooter');
const promptsBtnFooter = document.getElementById('prompts-btnfooter');
const linkBtnFooter = document.getElementById('links-btnfooter');


//controller btn show/hide sections/display

const toggleWelcomeDisplay = () => {
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

welcomeBtn.addEventListener("click", toggleWelcomeDisplay);
aboutMeBtn.addEventListener("click", toggleAboutMeDisplay);
whyFacBtn.addEventListener("click", toggleWhyFacDisplay);
promptsBtn.addEventListener("click", togglePromptsCarouselDisplay);
linkBtn.addEventListener("click", toggleLinksDisplay);

// logic for footer buttons
welcomeBtnFooter.addEventListener("click", toggleWelcomeDisplay);
aboutMeBtnFooter.addEventListener("click", toggleAboutMeDisplay);
whyFacBtnFooter.addEventListener("click", toggleWhyFacDisplay);
promptsBtnFooter.addEventListener("click", togglePromptsCarouselDisplay);
linkBtnFooter.addEventListener("click", toggleLinksDisplay);



// Logic for carousel slider 

// Get elements
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const nextBtn = document.querySelector(".carousel-button-right");
const prevBtn = document.querySelector(".carousel-button-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
console.log(nextBtn, prevBtn, dotsNav, dots);

// show display to allow carousel to get div width
function showDisplay(){
    return promptsDisplay.style.display = "flex";
    
}

// hide display after 
function hideDisplay(){
    return promptsDisplay.style.display = "none";
}


showDisplay();
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);
hideDisplay();

// put the slides next to each other 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
    
    };
slides.forEach(setSlidePosition);

// move to the next slide 
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// dots change colour when moved either by clicking navDots or next/prev arrow
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

 // if on first slide remove prev btn else if last slide remove next btn else show next/prev btn
const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {

if(targetIndex === 0){
    prevBtn.classList.add('is-hidden');
    nextBtn.classList.remove('is-hidden');
} else if (targetIndex === slides.length - 1 ) {
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.add('is-hidden');
} else {
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.remove('is-hidden');
}
}

// when left button is clicked, slides move left
prevBtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    // navDots change colour when slides moves left
    updateDots(currentDot, prevDot);

    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
})


// when right button is clicked, slides move right
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
    // move to the next slide 
    moveToSlide(track, currentSlide, nextSlide);
    // navDots change colour when slide moves next
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);

});


// when nav buttons are clicked, move to picture accordingly
dotsNav.addEventListener('click', e => {
    // what indicator clicked
    const targetDot = e.target.closest('button');
    // if its not a navDot stop function
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    // return index of target dot
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
   
    moveToSlide(track, currentSlide, targetSlide);
    // dots change colour when clicked
    updateDots(currentDot, targetDot);
    
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);

})

//  keyboard nav
function keyboardNav (e){
    if(e.keyCode === 39){
  
    }
    else if(e.keyCode === 37){
 
    }
};
//   event listner for keyboard navigation 
document.addEventListener("keydown", keyboardNav);
