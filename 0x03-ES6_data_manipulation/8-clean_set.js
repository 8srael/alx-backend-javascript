export default function cleanSet(set, startStr) {
  const arrayStr = [];
  if (!set || !startStr || !(set instanceof Set) || typeof startStr !== 'string') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startStr)) {
      arrayStr.push(item.substring(startStr.length));
    }
  }

  return arrayStr.join('-');
}
