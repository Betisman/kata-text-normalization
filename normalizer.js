module.exports = language => input => {
    const uselessWordsByLang = {
        ES: ['MI', 'DE'],
        EN: ['MY', 'OF']
    };
    const removeS = word => word.replace(/[sS]$/, '');
    const toSingularByLang = {
        ES: removeS,
        EN: removeS
    };
    const diacriticalRemoval = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const symbolRemoval = word => word.replace(',', '');
    const uselessRemoval = word => !uselessWordsByLang[language].includes(word);
    const toSingular = toSingularByLang[language];
    return input.split(' ')
        .map(word => word.toUpperCase())
        .map(diacriticalRemoval)
        .map(symbolRemoval)
        .map(toSingular)
        .filter(uselessRemoval);
};