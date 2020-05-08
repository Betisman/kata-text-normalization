module.exports = language => input => {
    const uselessWordsByLang = {
        ES: ['MI', 'DE'],
        EN: ['MY', 'OF']
    };
    const diacriticalRemoval = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const uselessRemoval = word => !uselessWordsByLang[language].includes(word);
    return input.split(' ')
        .map(word => word.toUpperCase())
        .map(diacriticalRemoval)
        .filter(uselessRemoval);
};