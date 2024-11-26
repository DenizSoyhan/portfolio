const textElement = document.querySelector('.dynamicText');
const staticTextElement = document.querySelector('.staticIntro');

const mainPageButton = document.getElementById('mainPageButton');
const downloadsPageButton = document.getElementById('downloadsPageButton');
const projectsButton = document.getElementById('projectsButton');

const mainPage=document.getElementById('mainPage');
const downloadsPage=document.getElementById('downloadsPage');
const projectsPage=document.getElementById('projectsPage');

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
    mainPage.classList.toggle('hidden');
}, 5000);


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

const outlookContainers = document.getElementsByClassName('outlook');

for(let i=0;i<outlookContainers.length;i++){
    let school=outlookContainers[i].childNodes[1]
    let expandButton=school.childNodes[3];

    let details=outlookContainers[i].childNodes[3];
    console.log(expandButton)

    outlookContainers[i].addEventListener('click',function(){
        details.classList.toggle('active');
        expandButton.classList.toggle('buttonActive');
        if(expandButton.classList.contains('buttonActive')){ 
            expandButton.textContent='-';
        }else{
            expandButton.textContent='+';
        }
    })
}