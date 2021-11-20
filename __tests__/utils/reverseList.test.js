const reverseList = require('../../utils/reverse');

const initialList = [1, 2, 3, 4, 5];
const expectedList = [...initialList].reverse();

describe('reverseList', () => {
  it('works properly', async () => {
    const reversedList = await reverseList(initialList);
    expect(reversedList).toEqual(expectedList);
  });
});
