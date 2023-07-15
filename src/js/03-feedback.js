import throttle from 'lodash.throttle';

const emailEL = document.querySelector('input[name="email"]');
console.log(emailEL);
const messageEl = document.querySelector('textarea[name="message"]');
console.log(messageEl);
const formEl = document.querySelector(".feedback-form")
console.log(formEl);

formEl.addEventListener("input", throttle(saveValue, 500));
formEl.addEventListener("submit", onFormSubmit);


const STORAGE_KEY = 'feedback-form-state';


function saveValue(event){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)|| "{}");

    const formData = {...savedData, [event.target.name]:event.target.value};
    // formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData)); 
}

saveFeedbackForm ();

function saveFeedbackForm (event){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(!savedData) return;

    if(savedData.email) {
        emailEL.value = savedData.email;
    }
    if(savedData.message) {
        messageEl.value = savedData.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);

    localStorage.removeItem(STORAGE_KEY);
}
    


