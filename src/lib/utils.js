export const getRandomFromList = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

export function getRandomValuesFromArray(array, n) {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, n)
}
