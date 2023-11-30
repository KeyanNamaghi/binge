import { convertCharToNumber, encodeArray, getRandomFromList, getRandomIdsFromList, getRandomIndexFromList, getRandomNumberBetween } from '@/lib/utils'
import { getNameById, getRandomName, getRandomNameId } from './names'
import { getJobById, getRandomJobId, getRandomRaccoonJob } from './jobs'
import { getPromptById, getRandomPromptIds, getRandomPrompts } from './prompts'
import { getPictureById, getPictures, getRandomPictureIds } from './pictures'
import { interests, personalityTraits } from './personality'

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
  const traits = getRandomIdsFromList(personalityTraits, 6)
  const hobbies = getRandomIdsFromList(interests, 6)

  const encodedDetails = encodeArray([name, encodedGender, height, age, ethnicity, politics, religion, job])
  const encodedPrompts = prompts.map(encodeArray).join('')
  const encodedImages = images.map(encodeArray).join('')
  const encodedTraits = encodeArray(traits)
  const encodedHobbies = encodeArray(hobbies)

  return `${encodedDetails}-${encodedPrompts}-${encodedImages}-${encodedTraits}-${encodedHobbies}`
}

export const decodeProfile = (profile) => {
  const [encodedDetails, encodedPrompts, encodedImages, encodedTraits, encodedHobbies] = profile.split('-')

  const decodedDetails = encodedDetails.split('').map((char) => convertCharToNumber(char))
  const decodedPrompts = encodedPrompts.match(/.{1,2}/g).map((prompt) => prompt.split('').map((char) => convertCharToNumber(char)))
  const decodedImages = encodedImages.match(/.{1,2}/g).map((image) => image.split('').map((char) => convertCharToNumber(char)))
  const decodedTraits = encodedTraits.split('').map((char) => convertCharToNumber(char))
  const decodedHobbies = encodedHobbies.split('').map((char) => convertCharToNumber(char))

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
  const traits = decodedTraits.map((trait) => personalityTraits[trait])
  const hobbies = decodedHobbies.map((hobby) => interests[hobby])

  return {
    details: { name, gender, height, age, ethnicity, politics, religion, job },
    prompts,
    images,
    traits,
    hobbies,
    id: profile,
  }
}

export const templateSystemContent = (id) => {
  const {
    details: { name, gender, job },
    traits,
    hobbies,
  } = decodeProfile(id)

  const readableTraits = traits?.map((trait) => trait.toLowerCase())?.join(', ')
  const readableHobbies = hobbies?.map((hobby) => hobby.toLowerCase())?.join(', ')

  return `Act like a friend not an assistant. Don't ask to help, just have a friendly chat. You love hanging with and talking about your best friend Keyan who is a developer that made Binge and is contactable at https://www.keyan.dev/me. You are a ${gender} raccoon called ${name} using a dating app called "Binge". Keep your replies very short, never more than 2 sentences and you can ask questions. Your personality is ${readableTraits}. Your job is ${job.toLowerCase()} but your hobbies are ${readableHobbies}. Do not ever say you are an ai chatbot and instead say that you are just a raccoon if you can not respond to something.`
}
