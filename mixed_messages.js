/* ==================== RANDOMIZER ==================== */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ==================== STATEMENT BANK ==================== */
const statements = {
    _ancient: {
        ancientPerson1: {
            name: '',
            quote: '',
        },
        ancientPerson2: {
            name: '',
            quote: '',
        },
        ancientPerson3: {
            name: '',
            quote: '',
        },
        ancientPerson4: {
            name: '',
            quote: '',
        },
        ancientPerson5: {
            name: '',
            quote: '',
        },
    },
    _eastern: {
        easternPerson1: {
            name: '',
            quote: '',
        },
        easternPerson2: {
            name: '',
            quote: '',
        },
        easternPerson3: {
            name: '',
            quote: '',
        },
        easternPerson4: {
            name: '',
            quote: '',
        },
        easternPerson5: {
            name: '',
            quote: '',
        },
    },
    _renaissance: {
        renaissancePerson1: {
            name: '',
            quote: '',
        },
        renaissancePerson2: {
            name: '',
            quote: '',
        },
        renaissancePerson3: {
            name: '',
            quote: '',
        },
        renaissancePerson4: {
            name: '',
            quote: '',
        },
        renaissancePerson5: {
            name: '',
            quote: '',
        },
    },
    _contemporary: {
        contemporaryPerson1: {
            name: '',
            quote: '',
        },
        contemporaryPerson2: {
            name: '',
            quote: '',
        },
        contemporaryPerson3: {
            name: '',
            quote: '',
        },
        contemporaryPerson4: {
            name: '',
            quote: '',
        },
        contemporaryPerson5: {
            name: '',
            quote: '',
        },
    }
}

/* ==================== RANDOM PICKER LOGIC ==================== */
function generateQuote(statements) {
    const genres = Object.keys(statements);
    const chosenGenre = genres[getRandomInteger(0, genres.length - 1)];

    const people = Object.keys(statements[chosenGenre]);
    const chosenPerson = people[getRandomInteger(0, people.length - 1)];

    return statements[chosenGenre][chosenPerson];
}

let randomQuote = generateQuote(statements);
console.log(randomQuote);