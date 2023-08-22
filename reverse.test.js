const reverseStr = require('./reverse')

it('This is reversed', () =>
    expect(reverseStr('peer')).toBe('reep')
)

it('This is reversed', () =>
    expect(reverseStr('Garvin')).toBe('nivraG')
)