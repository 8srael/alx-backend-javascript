export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  myMap.forEach((v, k) => {
    if (v === 1) {
      myMap.set(k, 100);
    }
  });
}
