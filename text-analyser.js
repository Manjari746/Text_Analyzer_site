class WordCounter {
    constructor(inputText) {
        this.inputText = inputText;
        this.inputText.addEventListener('input', () => {
            this.count();
        });
    }

    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim()); //The trim() method removes whitespace from both sides of a string.
        //The trim() method does not change the original string
        // wordStat- Variables are containers that store values. and we can start by declaring a variable with the let keyword,
        // followed by the name you give to the variable:
        this.emitEvent(wordStat);
    }

    emitEvent(wordStat) {
        // Create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat
            }
        });
        // dispatch the count event
        this.inputText.dispatchEvent(countEvent);

    }
    getWordStat(str) {
        let matches = str.match(/\S+/g);
        // \s matches any whitespace character (equal to [\r\n\t\f\v ])
        // + -Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
        //g modifier: global. All matches (don't return after first match)
        return {
            characters: str.length,
            words: matches ? matches.length : 0,
        };        //condition? true statement : false statement
    }
}
