/* ==================== RANDOMIZER ==================== */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* ==================== STATEMENT BANK ==================== */
const statements = {
    ancient: [
        {
            name: 'Socrates',
            quote: "The only true wisdom is in knowing you know nothing.",
        },
        {
            name: 'Plato',
            quote: "Wise men speak because they have something to say; fools because they have to say something.",
        },
        {
            name: 'Aristotle',
            quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        },
        {
            name: 'Epictetus',
            quote: "It's not what happens to you, but how you react to it that matters.",
        },
        {
            name: 'Marcus Aurelius',
            quote: "You have power over your mind – not outside events. Realize this, and you will find strength.",
        },
    ],
    eastern: [
        {
            name: 'Confucius',
            quote: "Do not impose on others what you yourself do not desire.",
        },
        {
            name: 'Sun Tzu',
            quote: "Appear weak when you are strong, and strong when you are weak.",
        },
        {
            name: 'Siddhartha Gautama Buddha',
            quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        },
        {
            name: 'Laozi',
            quote: "A journey of a thousand miles begins with a single step.",
        },
        {
            name: 'Miyamoto Musashi',
            quote: "In battle, if you make your opponent flinch, you have already won.",
        },
    ],
    renaissance: [
        {
            name: 'Leonardo da Vinci',
            quote:  "Simplicity is the ultimate sophistication.",
        },
        {
            name: 'Michelangelo Buonarroti',
            quote: "I saw the angel in the marble and carved until I set him free.",
        },
        {
            name: 'Niccolò Machiavelli',
            quote: "It is better to be feared than loved if you cannot be both.",
        },
        {
            name: 'William Shakespeare',
            quote: "All the world's a stage, and all the men and women merely players.",
        },
        {
            name: 'René Descartes',
            quote: "I think, therefore I am.",
        },
    ],
    leaders: [
        {
            name: 'John F. Kennedy',
            quote: "Ask not what your country can do for you, ask what you can do for your country.",
        },
        {
            name: 'Winston Churchill',
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        },
        {
            name: 'Mahatma Gandhi',
            quote: "Be the change that you wish to see in the world.",
        },
        {
            name: 'Nelson Mandela',
            quote: "Education is the most powerful weapon which you can use to change the world.",
        },
        {
            name: 'Martin Luther King Jr',
            quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed:" +
                " 'We hold these truths to be self-evident, that all men are created equal.'",
        },
    ],
    science: [
        {
            name: 'Isaac Newton',
            quote: "No great discovery was made without a bold guess?",
        },
        {
            name: 'Albert Einstein',
            quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination" +
                " embraces the entire world, stimulating progress, giving birth to evolution.",
        },
        {
            name: 'Marie Curie',
            quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more" +
                " so that we may fear less.",
        },
        {
            name: 'Charles Darwin',
            quote: "It is not the strongest of the species that survives, nor the most intelligent that survives. It" +
                " is the one that is the most adaptable to change.",
        },
        {
            name: 'Galileo Galilei',
            quote: "In questions of science, the authority of a thousand is not worth the humble reasoning of a" +
                " single individual.",
        },
    ],
    conquerors: [
        {
            name: 'Alexander the Great',
            quote: "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.",
        },
        {
            name: 'Julius Ceasar',
            quote: "Cowards die many times before their deaths; the valiant never taste of death but once",
        },
        {
            name: 'Napoleon Bonaparte',
            quote: "History is the version of past events that people have decided to agree upon.",
        },
        {
            name: 'Suleiman the Magnificent',
            quote: "Life is an hourglass. The sand will always run out, so make the most of every moment.",
        },
        {
            name: 'Charlemagne',
            quote: "To show resentment at a reproach is to acknowledge that one may have deserved it.",
        },
    ]
};


/* ==================== RANDOM PICKER LOGIC ==================== */
function generateQuote(statements) {
    const genres = Object.keys(statements);
    const chosenGenre = genres[getRandomInteger(0, genres.length)];
    const chosenGenreQuotes = statements[chosenGenre];

    return chosenGenreQuotes[getRandomInteger(0, chosenGenreQuotes.length)];
}

let randomQuote = generateQuote(statements);
console.log(randomQuote);