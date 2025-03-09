
// text helpers
export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const capitalizeAllFirstLetters = (text) => {
    const splitTexts = text.split(" ");
    return splitTexts.reduce((fullText, currText) => {
        const capText = capitalizeFirstLetter(currText);
        return fullText + " " + capText
    }, "");
}