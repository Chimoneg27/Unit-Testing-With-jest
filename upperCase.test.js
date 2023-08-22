const upperCase = require('./upperCase')

test('First letter capitalized', () => 
    expect(upperCase('garvin')).toBe('Garvin')
);