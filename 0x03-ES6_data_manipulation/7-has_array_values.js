export default function (set, array) {
  return array.every((item) => set.has(item));
}
