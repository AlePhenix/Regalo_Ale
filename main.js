const cake_btn = document.getElementById('cake_btn');
const age_counter = document.getElementById('age_counter');
const main = document.getElementById('main');
const section = document.getElementById('section');


var i = 0;
function addAgeCounter(){
    i++;  
    if (i <=18) {
        age_counter.innerText= `${i}`;
    }
    else{
        setTimeout( () => {
            main.classList.add('none');
            section.classList.remove('none');
        }, 800);
    }
}