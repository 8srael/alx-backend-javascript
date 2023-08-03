export default function cleanSet(set, startStr) {
  const arrayStr = [];
  if (!set || !startStr || !(set instanceof Set) || typeof startStr !== 'string') {
    return '';
  }
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startStr)) {
      const itemSubStr = item.substring(startStr.length);
      if (itemSubStr && itemSubStr !== item) {
        arrayStr.push(itemSubStr);
      }
    }
  }

  return arrayStr.join('-');
}
