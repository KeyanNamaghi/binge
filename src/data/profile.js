import { getRandomFromList } from '@/lib/utils'
import { getRandomName } from './names'
import { getRandomRaccoonJob } from './jobs'
import { getRandomPrompts } from './prompts'
import { getPictures } from './pictures'

export const getRandomHeight = () => {
  // Raccoons measure 16-28 inches in length, not including their 10-inch tail
  const height = 16 + Math.floor(Math.random() * 12)
  return `${Math.floor(height / 12)}' ${height % 12}`
}

export const getRandomAge = () => {
  // The longest surviving wild raccoon lived for 16 years, while a captive raccoon's lifespan can last as long as 21
  return 1 + Math.floor(Math.random() * 20)
}

export const getRandomReligion = () => {
  const religions = ['Christian', 'Muslim', 'Buddhist', 'Hindu', 'Jewish', 'Sikh', 'Spiritual', 'Atheist', 'Agnostic', 'Other', 'Prefer not to say']
  return getRandomFromList(religions)
}

export const getRandomEthnicity = () => {
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
  return getRandomFromList(ethnicities)
}

export const getRandomPolitics = () => {
  const politics = ['Liberal', 'Conservative', 'Moderate', 'Not political', 'Other', 'Prefer not to say']
  return getRandomFromList(politics)
}

export const getRandomGender = () => (Math.random() > 0.5 ? 'Male' : 'Female')

export const buildRandomDetails = () => {
  const gender = getRandomGender()
  return {
    gender,
    name: getRandomName(gender),
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
  return { details, prompts, images }
}
