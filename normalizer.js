module.exports = language => input => {
    const diacriticalRemoval = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return input.split(' ')
        .map(word => word.toUpperCase())
        .map(diacriticalRemoval);
};