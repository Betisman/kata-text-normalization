module.exports = language => input => {
    const uselessWords = ['MI', 'DE'];
    const diacriticalRemoval = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const uselessRemoval = word => !uselessWords.includes(word);
    return input.split(' ')
        .map(word => word.toUpperCase())
        .map(diacriticalRemoval)
        .filter(uselessRemoval);
};