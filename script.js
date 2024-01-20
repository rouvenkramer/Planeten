function divBorders() {
    document.querySelectorAll('div').forEach(div => div.style.border = '2px solid red');
}

function divNoBorders() {
    document.querySelectorAll('div').forEach(div => div.style.border = 'none');

}

function planet2(changeTo) {

    const element = document.getElementById('planet2image');
    const allClasses = ['mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

    element.src = `./img/${changeTo}.jpg`;

    element.classList.remove(...allClasses);

    element.classList.add(changeTo);

}

