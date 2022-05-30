import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener( 'submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));



function onTextareaInput() {
    
    const inputValue = {
        email: refs.email.value,
        message: refs.message.value,
    };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValue))
};



function onFormSubmit(e) { 
    e.preventDefault();
    e.target.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
};

populateTextarea();

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const formData = JSON.parse(savedMessage);
        email.value = formData.email;
        message.value = formData.message;

    }
}