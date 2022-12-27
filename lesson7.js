const birthYear = +prompt("Enter your birth year?", '');
const yourCity = prompt("Enter your City?", '');
const likeSport = prompt("What is your favorite sport?", '');

let rusultBirthYear;
let rusultYourCity;
let rusultLikeSport;

if (!isNaN(birthYear) && (birthYear > 1900)) {
    rusultMyAge = 2022 - birthYear;
    rusultBirthYear = `Ваш вік ${rusultMyAge}`
} else {
    rusultBirthYear = `Шкода, що Ви не захотіли ввести свій(ю) вік!`
}

switch (true) {
    case (yourCity === null):
        rusultYourCity = `Шкода, що Ви не захотіли ввести свіє місто!`
        break;
    case ('kiyv' === yourCity.toLowerCase()):
        rusultYourCity = 'Ти живеш у столиці України!'
        break;
    case ('london' === yourCity.toLowerCase()):
        rusultYourCity = 'Ти живеш у столиці Англії!'
        break;
    case ('washington' === yourCity.toLowerCase()):
        rusultYourCity = 'Ти живеш у столиці США!'
        break;
    case (yourCity.trim() === ''):
        rusultYourCity = `Шкода, що Ви не захотіли ввести свіє місто!`
        break;
    default:
        rusultYourCity = `Tи живеш у місті ${yourCity}`
}

switch (true) {
    case (likeSport === null):
        rusultLikeSport = `Шкода, що Ви не захотіли ввести свій спорт!`
        break;
    case ('football' === likeSport.toLowerCase()):
        rusultLikeSport = 'Круто! Хочеш стати - Lionel Messi?'
        console.log(likeSport)
        break;
    case ('tennis' === likeSport.toLowerCase()):
        rusultLikeSport ='Круто! Хочеш стати - Serena Williams?'
        break;
    case ('ping-pong' === likeSport.toLowerCase()):
        rusultLikeSport = 'Круто! Хочеш стати - Andrew Baggaley?'
        break;
    default:
        rusultLikeSport = `Гарний вибір спорту - ${likeSport}`
        break;
}

alert(`${rusultBirthYear} \n ${rusultYourCity} \n ${rusultLikeSport}`)

