/* ==================== STATEMENT BANK ==================== */
const statements = {
    ancient: [
        {
            author: 'Socrates',
            quote: "The only true wisdom is in knowing you know nothing.",
        },
        {
            author: 'Plato',
            quote: "Wise men speak because they have something to say; fools because they have to say something.",
        },
        {
            author: 'Aristotle',
            quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        },
        {
            author: 'Epictetus',
            quote: "It's not what happens to you, but how you react to it that matters.",
        },
        {
            author: 'Marcus Aurelius',
            quote: "You have power over your mind – not outside events. Realize this, and you will find strength.",
        },
    ],
    eastern: [
        {
            author: 'Confucius',
            quote: "Do not impose on others what you yourself do not desire.",
        },
        {
            author: 'Sun Tzu',
            quote: "Appear weak when you are strong, and strong when you are weak.",
        },
        {
            author: 'Siddhartha Gautama Buddha',
            quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        },
        {
            author: 'Laozi',
            quote: "A journey of a thousand miles begins with a single step.",
        },
        {
            author: 'Miyamoto Musashi',
            quote: "In battle, if you make your opponent flinch, you have already won.",
        },
    ],
    renaissance: [
        {
            author: 'Leonardo da Vinci',
            quote:  "Simplicity is the ultimate sophistication.",
        },
        {
            author: 'Michelangelo Buonarroti',
            quote: "I saw the angel in the marble and carved until I set him free.",
        },
        {
            author: 'Niccolò Machiavelli',
            quote: "It is better to be feared than loved if you cannot be both.",
        },
        {
            author: 'William Shakespeare',
            quote: "All the world's a stage, and all the men and women merely players.",
        },
        {
            author: 'René Descartes',
            quote: "I think, therefore I am.",
        },
    ],
    leaders: [
        {
            author: 'John F. Kennedy',
            quote: "Ask not what your country can do for you, ask what you can do for your country.",
        },
        {
            author: 'Winston Churchill',
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        },
        {
            author: 'Mahatma Gandhi',
            quote: "Be the change that you wish to see in the world.",
        },
        {
            author: 'Nelson Mandela',
            quote: "Education is the most powerful weapon which you can use to change the world.",
        },
        {
            author: 'Martin Luther King Jr',
            quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed:" +
                "\n 'We hold these truths to be self-evident, that all men are created equal.'",
        },
    ],
    science: [
        {
            author: 'Isaac Newton',
            quote: "No great discovery was made without a bold guess?",
        },
        {
            author: 'Albert Einstein',
            quote: "Imagination is more important than knowledge. \n" +
                " For knowledge is limited, whereas imagination embraces the entire world," +
                "\n stimulating progress, giving birth to evolution.",
        },
        {
            author: 'Marie Curie',
            quote: "Nothing in life is to be feared, it is only to be understood." +
                "\n Now is the time to understand more so that we may fear less.",
        },
        {
            author: 'Charles Darwin',
            quote: "It is not the strongest of the species that survives, nor the most intelligent that survives." +
                "\n It is the one that is the most adaptable to change. ",
        },
        {
            author: 'Galileo Galilei',
            quote: "In questions of science, the authority of a thousand is not worth" +
                "\n the humble reasoning of a single individual.",
        },
    ],
    conquerors: [
        {
            author: 'Alexander the Great',
            quote: "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.",
        },
        {
            author: 'Julius Ceasar',
            quote: "Cowards die many times before their deaths; the valiant never taste of death but once",
        },
        {
            author: 'Napoleon Bonaparte',
            quote: "History is the version of past events that people have decided to agree upon.",
        },
        {
            author: 'Suleiman the Magnificent',
            quote: "Life is an hourglass. The sand will always run out, so make the most of every moment.",
        },
        {
            author: 'Charlemagne',
            quote: "To show resentment at a reproach is to acknowledge that one may have deserved it.",
        },
    ]
};

/* ==================== RANDOM PICKER LOGIC ==================== */
const getRandomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

function generateQuote(statements) {
    const genres = Object.keys(statements);
    const chosenGenre = genres[getRandomInteger(0, genres.length)];
    const chosenGenreQuotes = statements[chosenGenre];

    return chosenGenreQuotes[getRandomInteger(0, chosenGenreQuotes.length)];
}

/* ==================== QUOTE FORMATTING ==================== */
const formatQuote = quote =>
    `"${quote.quote}" \n  — ${quote.author}`;

let randomQuote = formatQuote(generateQuote(statements));
console.log(randomQuote);