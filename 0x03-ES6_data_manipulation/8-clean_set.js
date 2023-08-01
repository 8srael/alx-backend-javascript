export default function cleanSet(set, startStr) {
  const arrayStr = [];
  if (startStr.length === 0) {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startStr)) {
      arrayStr.push(item.substring(startStr.length));
    }
  }

  return arrayStr.join('-');
}
