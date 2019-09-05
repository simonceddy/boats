const keys = ['b', 'o', 'a', 't', 's'];

export function removeFirstLetter(word) {
  return word.replace(/^(B|O|A|T|S)/, '');
}

export function prepareTitle(title) {
  const bits = title.split(' ');
  if (bits.length !== 5) return false;
  const words = {};
  bits.map((bit, id) => {
    words[keys[id]] = removeFirstLetter(bit);
    return true;
  });
  return words;
}
