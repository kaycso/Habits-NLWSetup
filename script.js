const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', registerDay);
form.addEventListener('change', saveData);

function registerDay() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists) {
        alert("Dia já incluso");
        return;
    }

    nlwSetup.addDay(today)
}

//mudar a forma de alerta para uma caixa de diálogo simples

function saveData() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};

nlwSetup.setData(data)
nlwSetup.load()