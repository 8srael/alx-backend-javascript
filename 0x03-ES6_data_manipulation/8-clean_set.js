export default function cleanSet(set, startStr) {
  const arrayStr = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startStr)) {
      arrayStr.push(item.substring(startStr.length));
    }
  }

  return arrayStr.join('-');
}
