module.exports = language => input => {
    const uselessWordsByLang = {
        ES: ['MI', 'DE'],
        EN: ['MY', 'OF']
    };
    const toSingular = word => word.replace(/[sS]$/, '');
    const diacriticalRemoval = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const symbolRemoval = word => word.replace(',', '');
    const uselessRemoval = word => !uselessWordsByLang[language].includes(word);
    return input.split(' ')
        .map(word => word.toUpperCase())
        .map(diacriticalRemoval)
        .map(symbolRemoval)
        .map(toSingular)
        .filter(uselessRemoval);
};