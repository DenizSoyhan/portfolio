const textElement = document.querySelector('.dynamicText');
const staticTextElement = document.querySelector('.staticIntro');

const mainPageButton = document.getElementById('mainPageButton');
const downloadsPageButton = document.getElementById('downloadsPageButton');
const projectsButton = document.getElementById('projectsButton');

const mainPage=document.getElementById('mainPage');
const downloadsPage=document.getElementById('downloadsPage');
const projectsPage=document.getElementById('projectsPage');

const educationDiv = document.getElementById('education');
const leftTechDiv = document.getElementById('techMainLeft');
const photoDiv = document.getElementById('photoContainer');
const rightTechDiv = document.getElementById('techMainRight');
const experienceDiv = document.getElementById('experience');

const projectsContainers = document.getElementById('projects');

let firstTimeNav=1;

let whichPage=0; //0 main  1 downloads   2 projects

const messages = [" Oğul Deniz Soyhan", "a computer Engineer", " a WEB Enthusiast."]; // Add messages here
let messageIndex = 0;

// Function to start/restart the animation
function restartAnimation() {
    // Sets the new message
    textElement.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages

    // Trigger reflow to restart the CSS animation
    textElement.style.animation = 'none';
    void textElement.offsetWidth; // Reflow trigger
    
    textElement.style.animation = 'typing 3s , blink 0s step-end infinite, typeback 3s ease-in 5s forwards';
}

// waits end of the "typeback" animation and restart
textElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'typeback') {
        setTimeout(() => {
            restartAnimation();
        }, 1000); // 1-second delay between cycles
    }
});

// the delay for the first load of the page

staticTextElement.classList.add('show'); 

setTimeout(() => {
    textElement.classList.add('show');
}, 500);
setTimeout(() => {
    
    restartAnimation();
}, 1500); 


//NAVLIST ANIMATION
const navList = document.querySelector('.navList');
mainPageButton.classList.add('chosenNavBar');
setTimeout(() => {
    
    navList.classList.add('show'); // Add the class to trigger the fade-in
    
}, 2500);

function overRideDelay(firstTimeNav){
    if(firstTimeNav){
        educationDiv.classList.add('noDelay');
        experienceDiv.classList.add('noDelay');
        leftTechDiv.classList.add('noDelay'); 
        photoDiv.classList.add('noDelay');
        rightTechDiv.classList.add('noDelay'); 
    }
    firstTimeNav=0;
}
//page changing animation
mainPageButton.addEventListener('click',function(){

    if(whichPage!=0){
        downloadsPage.style.animation='fadeOut 0.5s ease forwards';
        projectsPage.style.animation='fadeOut 0.5s ease forwards';
        mainPage.style.animation='fadeInUp2 0.5s ease forwards';

         // Toggle active state classes
         downloadsPageButton.classList.remove('chosenNavBar');
         projectsButton.classList.remove('chosenNavBar');
         mainPageButton.classList.add('chosenNavBar')
        setTimeout(function() {
            downloadsPage.classList.add('hidden');
            projectsPage.classList.add('hidden');
            mainPage.classList.remove('hidden')
            whichPage = 0;
        }, 200);
    }
})

downloadsPageButton.addEventListener('click',function(){
    overRideDelay(firstTimeNav);
    if(whichPage!=1){
        mainPage.style.animation='fadeOut 0.5s ease forwards';
        projectsPage.style.animation='fadeOut 0.5s ease forwards';
        downloadsPage.style.animation='fadeInUp2 0.5s ease forwards';
         // Toggle active state classes
        mainPageButton.classList.remove('chosenNavBar');
        projectsButton.classList.remove('chosenNavBar');
        downloadsPageButton.classList.add('chosenNavBar');

        setTimeout(function() {
            projectsPage.classList.add('hidden');
            mainPage.classList.add('hidden')
            downloadsPage.classList.remove('hidden');
            
            whichPage = 1;
        }, 200);
    }
})

projectsButton.addEventListener('click',function(){
    overRideDelay(firstTimeNav);
    if(whichPage!=2){
        mainPage.style.animation='fadeOut 0.5s ease forwards';
        downloadsPage.style.animation='fadeOut 0.5s ease forwards';
        projectsPage.style.animation='fadeInUp2 0.5s ease forwards';
         // Toggle active state classes
        mainPageButton.classList.remove('chosenNavBar');
        downloadsPageButton.classList.remove('chosenNavBar');
        projectsButton.classList.add('chosenNavBar');

        setTimeout(function() {
            downloadsPage.classList.add('hidden');
            mainPage.classList.add('hidden')
            projectsPage.classList.remove('hidden');
            
            whichPage = 2;
        }, 200);
    }
})

/*ACCORDION EDUCATION*/
/*For a smooth accordion animation I used requestAnimationFrame otherwise closing the accordion causes a delay which looks and feels bad*/
const outlookContainers = document.getElementsByClassName('outlook');

for (let i = 0; i < outlookContainers.length; i++) {
    let school = outlookContainers[i].childNodes[1];
    let expandButton = school.childNodes[3];
    let details = outlookContainers[i].childNodes[3];

    outlookContainers[i].addEventListener('click', function () {
        details.classList.toggle('active');
        expandButton.classList.toggle('buttonActive');

        if (details.classList.contains('active')) {
            // Expanding: Set max-height dynamically to content height
            details.style.maxHeight = details.scrollHeight + "px";
            expandButton.textContent = '-';
        } else {
            // Collapsing: Set max-height to the current height first, then to 0 for a smooth transition
            details.style.maxHeight = details.scrollHeight + "px"; // Set to current height to trigger animation
            requestAnimationFrame(() => {
                details.style.maxHeight = "0";
            });
            expandButton.textContent = '+';
        }
    });
}

/*Give projects animations */
function animateProjects(){
    console.log(projectsContainers.children)

    for(let i = 0;i<projectsContainers.children.length;i++){
        if(i%2==0){
            projectsContainers.children[i].style.animation = 'fadeInFromLeft 1s ease forwards'
            console.log(projectsContainers[i]);
        }else{
             projectsContainers.children[i].style.animation = 'fadeInFromRight 1s ease forwards'
             console.log(projectsContainers[i]);

            }
        
    }
    
}
animateProjects();

/*tooltips for projects*/

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.technologies img');

    // Tooltip text array
    const toolTipText = [
        "HTML5: The standard for structuring web pages.",
        "CSS: The language for styling web pages.",
        "JavaScript: The language for web interactivity.",
        "YOLOv4: A real-time object detection algorithm.",
        "Python: A popular and versatile programming language.",
        "Slick.js: A jQuery plugin for creating responsive and customizable carousels.",
        "Node.js: A JavaScript runtime for building scalable server-side applications.",
        "GitHub: A platform for version control and collaborative software development."
    ];

    // Map image ids to corresponding toolTipText indexes
    const toolTipMap = {
        html: 0,
        css: 1,
        JS: 2,
        yoloV4: 3,
        python: 4,
        slick: 5,
        node: 6,
        github: 7
    };

    images.forEach(img => {
        const id = img.id; 
        const tooltipIndex = toolTipMap[id]; 
        const tooltipText = toolTipText[tooltipIndex]; 

        if (tooltipText) {
      
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            img.after(tooltip); 

            // Show tooltip on hover
            img.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
            });

            // Hide tooltip when not hovering
            img.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        }
    });
});