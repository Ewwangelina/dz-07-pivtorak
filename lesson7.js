const yourAge = +prompt("Enter your Age?", '');
const yourSity = prompt("Enter your Sity?", '');
const likeSport = prompt("What is your favorite sport?", '');

let rusultYourAge;
let rusultYourSity;
let rusultLikeSport;

if (!isNaN(yourAge) && (yourAge < 1900)) {
    rusultYourAge = `Ваш вік ${yourAge}`
} else {
    rusultYourAge = `Шкода, що Ви не захотіли ввести свій(ю) вік!`
}

switch (true) {
    case (yourSity === null):
        rusultYourSity = `Шкода, що Ви не захотіли ввести свіє місто!`
        break;
    case ('kiyv' === yourSity.toLowerCase()):
        rusultYourSity = 'Ти живеш у столиці України!'
        break;
    case ('london' === yourSity.toLowerCase()):
        rusultYourSity = 'Ти живеш у столиці Англії!'
        break;
    case ('vashington' === yourSity.toLowerCase()):
        rusultYourSity = 'Ти живеш у столиці США!'
        break;
        case (yourSity.trim() === ''):
            rusultYourSity = `Шкода, що Ви не захотіли ввести свіє місто!`
            break;
    default:
        rusultYourSity = `Tи живеш у місті ${yourSity}`
}

switch (likeSport) {
    case ('football' === yourSity.toLowerCase()):
        rusultLikeSport = 'Круто! Хочеш стати - Lionel Messi?'
        break;
    case ('tennis' === yourSity.toLowerCase()):
        rusultLikeSport ='Круто! Хочеш стати - Serena Williams?'
        break;
    case ('ping-pong' === yourSity.toLowerCase()):
        rusultLikeSport = 'Круто! Хочеш стати - Andrew Baggaley?'
        break;
    case (likeSport):
        rusultLikeSport = `Tи займаєшься ${likeSport}`
        break;
    default:
        rusultLikeSport = `Шкода, що Ви не захотіли ввести свій спорт!`
}

alert(`${rusultYourAge} \n ${rusultYourSity} \n ${rusultLikeSport}`)

