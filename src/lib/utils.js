export const getRandomIndexFromList = (list) => Math.floor(Math.random() * list.length)

export const getRandomFromList = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

export function getRandomValuesFromArray(array, n) {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, n)
}

export function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement)
}

const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const convertNumberToChar = (number) => chars[number]
export const convertCharToNumber = (letter) => chars.indexOf(letter)
export const encodeArray = (array) => array.map(convertNumberToChar).join('')

export const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
