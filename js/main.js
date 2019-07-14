const welcome = (name, age) => {
    console.log (`Witaj ${name}, masz ${age} lat!`);
}

welcome(`Artur`, 31)

const navigationSwitcher = document.querySelector(`.navigation__switcher--js`)

navigationSwitcher.addEventListener(`click`, (e) => {
    const navigationList = document.querySelector(`.navigation__list--js`);
    navigationList.classList.toggle(`navigation__list--visible`);

});