// Copyright (c) 2022 Brad Traversy. Licensed under MIT License.
// See license text at https://github.com/bradtraversy/50projects50days/blob/master/LICENSE


const cards = document.querySelectorAll('.card')
const coalitions = document.querySelectorAll('.party-cards');
const buttons = document.querySelectorAll('button');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeOpenClasses();
        card.classList.add('open');
    })
});

function removeOpenClasses() {
    cards.forEach(card => {
        card.classList.remove('open');
    })
}

function switchCoalition(id) {
    switch (id) {
        case 0: {
            removeActiveClasses();
            removeDisabledClasses();
            document.querySelector('#bn').classList.add('active');
            document.querySelector('#bnBtn').classList.add('disabled');
            break;
        }
        case 1: {
            removeActiveClasses();
            removeDisabledClasses();
            document.querySelector('#pn').classList.add('active');
            document.querySelector('#pnBtn').classList.add('disabled');
            break;
        }
        case 2: {
            removeActiveClasses();
            removeDisabledClasses();
            document.querySelector('#ph').classList.add('active');
            document.querySelector('#phBtn').classList.add('disabled');
        }
    }
}

function removeActiveClasses() {
    coalitions.forEach(coalition => {
        coalition.classList.remove('active');
    });
}

function removeDisabledClasses() {
    buttons.forEach(button => {
        button.classList.remove('disabled');
    });
}