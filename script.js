const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
const buttonAlert = document.querySelector('#alert button');

button.addEventListener('click', registerDay);
form.addEventListener('change', saveData);
buttonAlert.addEventListener('click', removeAlert)

function registerDay() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists) {
        alertRender();
        return;
    }

    nlwSetup.addDay(today)
}

function alertRender() {
    const atention = document.querySelector('#alert');
    window.scrollTo(0, 0)
    document.body.classList.add('alert-expanded');    
    atention.classList.add('alert-expanded')
}

function removeAlert() {
    const atention = document.querySelector('#alert');
    document.body.classList.remove('alert-expanded');    
    atention.classList.remove('alert-expanded')
}

//mudar a forma de alerta para uma caixa de diálogo simples

function saveData() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};

nlwSetup.setData(data)
nlwSetup.load()