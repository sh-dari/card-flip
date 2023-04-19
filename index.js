const cards = document.querySelectorAll(".card-flip__wrapper");
const continueButton = document.querySelector('.body__button');

let cardFlipped = [];

const isAllFlipped = () => {
    let intersection = ['1', '2', '3'].filter(x => !cardFlipped.includes(x));
    if (intersection.length == 0) {
        continueButton.disabled = false;
    }
}

const handleFlip = (evt) => {
    const {id} = evt.currentTarget;
    cardFlipped.push(id);
    isAllFlipped();
};

cards.forEach(card => card.addEventListener('mouseover', handleFlip));