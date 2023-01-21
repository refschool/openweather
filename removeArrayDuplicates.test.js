const removeArrayDuplicates = require('openweather-wrapper')


test('dedup [1, 4, 4, 5, 2, 1, 8, 7, 7, 6, 6, 3, 2]', () => {

    expect(removeArrayDuplicates([1, 4, 4, 5, 2, 1, 8, 7, 7, 6, 6, 3, 2])).toEqual([1, 4, 5, 2, 8, 7, 6, 3]);
    //expect([1, 4, 6, 6, 3, 2]).toEqual([1, 4, 6, 6, 3, 2]);
});

test('dedup []', () => {
    expect(removeArrayDuplicates([])).toEqual([]);
});


test('dedup not array', () => {
    expect(removeArrayDuplicates({})).toEqual([]);
});