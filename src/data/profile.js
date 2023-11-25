import { convertCharToNumber, encodeArray, getRandomFromList, getRandomIndexFromList, getRandomNumberBetween } from '@/lib/utils'
import { getNameById, getRandomName, getRandomNameId } from './names'
import { getJobById, getRandomJobId, getRandomRaccoonJob } from './jobs'
import { getPromptById, getRandomPromptIds, getRandomPrompts } from './prompts'
import { getPictureById, getPictures, getRandomPictureIds } from './pictures'

export const getRandomHeight = () => {
  // Raccoons measure 16-28 inches in length, not including their 10-inch tail
  const height = 16 + Math.floor(Math.random() * 12)
  return `${Math.floor(height / 12)}' ${height % 12}`
}

const numberToHeight = (height) => {
  return `${Math.floor(height / 12)}' ${height % 12}`
}

export const getRandomAge = () => {
  // The longest surviving wild raccoon lived for 16 years, while a captive raccoon's lifespan can last as long as 21
  return 1 + Math.floor(Math.random() * 20)
}

const religions = ['Christian', 'Muslim', 'Buddhist', 'Hindu', 'Jewish', 'Sikh', 'Spiritual', 'Atheist', 'Agnostic', 'Other', 'Prefer not to say']
export const getRandomReligion = () => {
  return getRandomFromList(religions)
}

const ethnicities = [
  'White',
  'Black',
  'Hispanic/Latino',
  'East Asian',
  'South Asian',
  'Southeast Asian',
  'Central Asian',
  'Middle Eastern',
  'Native American',
  'Pacific Islander',
  'Other',
  'Prefer not to say',
]
export const getRandomEthnicity = () => {
  return getRandomFromList(ethnicities)
}

const politicalOptions = ['Liberal', 'Conservative', 'Moderate', 'Not political', 'Other', 'Prefer not to say']
export const getRandomPolitics = () => {
  return getRandomFromList(politicalOptions)
}

export const createName = () => getRandomName(getRandomGender())

export const getRandomGender = () => (Math.random() > 0.5 ? 'Male' : 'Female')

export const buildRandomDetails = () => {
  const gender = getRandomGender()
  return {
    name: getRandomName(gender),
    gender,
    height: getRandomHeight(),
    age: getRandomAge(),
    ethnicity: getRandomEthnicity(),
    politics: getRandomPolitics(),
    religion: getRandomReligion(),
    job: getRandomRaccoonJob(),
  }
}

export const buildRandomProfile = () => {
  const details = buildRandomDetails()
  const prompts = getRandomPrompts(3)
  const images = getPictures(3)
  const id = crypto.randomUUID()

  return { details, prompts, images, id }
}

export const buildProfile = () => {
  const gender = getRandomGender()
  const encodedGender = gender === 'Male' ? 0 : 1
  const name = getRandomNameId(gender)
  const height = getRandomNumberBetween(16, 28)
  const age = getRandomNumberBetween(1, 20)
  const ethnicity = getRandomIndexFromList(ethnicities)
  const politics = getRandomIndexFromList(politicalOptions)
  const religion = getRandomIndexFromList(religions)
  const job = getRandomJobId()
  const prompts = getRandomPromptIds(3)
  const images = getRandomPictureIds(3)
  const encodedDetails = encodeArray([name, encodedGender, height, age, ethnicity, politics, religion, job])
  const encodedPrompts = prompts.map((prompt) => encodeArray(prompt))
  const encodedImages = images.map((image) => encodeArray(image))
  return `${encodedDetails}-${encodedPrompts.join('')}-${encodedImages.join('')}`
}

export const decodeProfile = (profile) => {
  const [encodedDetails, encodedPrompts, encodedImages] = profile.split('-')

  const decodedDetails = encodedDetails.split('').map((char) => convertCharToNumber(char))
  const decodedPrompts = encodedPrompts.match(/.{1,2}/g).map((prompt) => prompt.split('').map((char) => convertCharToNumber(char)))
  const decodedImages = encodedImages.match(/.{1,2}/g).map((image) => image.split('').map((char) => convertCharToNumber(char)))

  const gender = decodedDetails[1] === 0 ? 'Male' : 'Female'
  const name = getNameById(gender, decodedDetails[0])
  const height = numberToHeight(decodedDetails[2])
  const age = decodedDetails[3]
  const ethnicity = ethnicities[decodedDetails[4]]
  const politics = politicalOptions[decodedDetails[5]]
  const religion = religions[decodedDetails[6]]
  const job = getJobById(decodedDetails[7])

  const prompts = decodedPrompts.map(getPromptById)
  const images = decodedImages.map(getPictureById)

  return {
    details: {
      name,
      gender,
      height,
      age,
      ethnicity,
      politics,
      religion,
      job,
    },
    prompts,
    images,
    id: profile,
  }
}
