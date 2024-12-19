// app.ts

// Mapping of standard words to GenZ slang
const genZDictionary: { [key: string]: string } = {
    "hello": "hey",
    "hi": "sup",
    "friends": "fam",
    "you": "u",
    "are": "r",
    "cool": "lit",
    "awesome": "fire",
    "because": "cuz",
    "really": "fr",
    "amazing": "savage",
    "boring": "dead",
    "goodbye": "bet",
    "yes": "yas",
    "no": "nah",
    "love": "luv",
    "money": "bread",
    "cool": "dope",
    "okay": "ok",
    "see you later": "cya",
    "see you soon": "cya soon",
    "laugh out loud": "lol",
    "be right back": "brb",
    "by the way": "btw",
    "oh my god": "omg",
    "in my opinion": "imo",
    // Add more as needed
};

// Function to translate text to GenZ slang
function translateToGenZ(text: string): string {
    // Split the text into words while keeping punctuation
    const words = text.split(/(\s+|,|\.|!|\?)/);
    const translatedWords = words.map(word => {
        const lowerWord = word.toLowerCase();
        // Check for exact matches
        if (genZDictionary[lowerWord]) {
            // Preserve the original casing
            return word[0] === word[0].toUpperCase()
                ? capitalize(genZDictionary[lowerWord])
                : genZDictionary[lowerWord];
        }
        return word;
    });
    return translatedWords.join('');
}

// Helper function to capitalize the first letter
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// DOM Elements
const inputText: HTMLTextAreaElement = document.getElementById('inputText') as HTMLTextAreaElement;
const translateButton: HTMLButtonElement = document.getElementById('translateButton') as HTMLButtonElement;
const outputText: HTMLTextAreaElement = document.getElementById('outputText') as HTMLTextAreaElement;

// Event Listener for Translate Button
translateButton.addEventListener('click', () => {
    const input = inputText.value;
    if (input.trim() === "") {
        outputText.value = "Please enter some text to translate!";
        return;
    }
    const translated = translateToGenZ(input);
    outputText.value = translated;
});
