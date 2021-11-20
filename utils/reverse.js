const reverseList = (listToReverse) => {
  const tempList = [];
  const reversedList = [];
  listToReverse.forEach((item) => tempList.push(item));
  while (tempList.length > 0) {
    const popItem = tempList.pop();
    reversedList.push(popItem);
  }
  return reversedList;
};

module.exports = reverseList;
