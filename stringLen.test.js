const strLen = require('./stringLen')

it('This is the length', () => {
    expect(strLen('four')).toBe(4)
});

it('This is the length', () => {
    expect(strLen('Garvin')).toBe(6)
})