const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


function darkMode(){
    nav.style.background='rgb(0 0 0/50%)';
    textBox.style.backgroundColor='rgb(255 255 255/ 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='img/undraw_proud_coder_dark.svg';
    image2.src='img/undraw_feeling_proud_dark.svg';
    image3.src='img/undraw_conceptual_idea_dark.svg';
}

function lightMode(){
    nav.style.background='rgb(255 255 255/50%)';
    textBox.style.backgroundColor='rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent = 'light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='img/undraw_proud_coder_light.svg';
    image2.src='img/undraw_feeling_proud_light.svg';
    image3.src='img/undraw_conceptual_idea_light.svg';
}



//switch theme

function switchTheme(event){
    // console.log(event.target.checked  );
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode()
    }
}

//event listener

toggleSwitch.addEventListener('change',switchTheme);