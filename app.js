$("document").ready(() => {
    var chain = new Markov();

    // Converts words in training format
    // "banana" -> "b a n a n a"
    words.forEach(element => {
        var splitted = element.split('').reduce((a, e, i) => a + e + " ", '');
        chain.addStates(splitted);
    });

    chain.setOrder(5);
    chain.train();

    // Keeps generating until a valid word is found
    var generateNewWord = () => {
        var newWord = "";
        while (newWord.length < 5 || words.includes(newWord)) {
            newWord = chain.generateRandom(50).replace(/ /g, "");;
        }
        $("#word").text(newWord);
    };

    // Generates the first word and enables the button
    $("#generate").click(generateNewWord);
    generateNewWord();
});