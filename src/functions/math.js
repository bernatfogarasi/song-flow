const shuffle = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const mergeShuffleKeepIternalOrder = (arrays) => {
  return shuffle(
    arrays.map((array, index) => Array(array.length).fill(index)).flat()
  ).map((arrayIndex) => arrays[arrayIndex].splice(0, 1));
};

const mergeChunks = (arrays, chunkLength) => {
  let result = [];
  while (arrays.flat().length > 0) {
    result.push(...arrays.map((array) => array.splice(0, chunkLength)).flat());
  }
  return result;
};

export { shuffle, mergeShuffleKeepIternalOrder, mergeChunks };
