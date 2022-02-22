function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

module.exports = getRandomArbitrary