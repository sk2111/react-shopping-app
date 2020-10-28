const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'dogpic.com',
    'dogwalk.com',
    'cheesepuf.com',
    'disney.com'
];

describe('googlesearch', () => {

    it('this is a sample test', () => {
        expect('hello').toBe('hello');
    })

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpic.com', 'dogwalk.com']);
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it('it does not return more than three matches', () => {
        expect(googleSearch('dog', dbMock).length).toEqual(3)
    })
})