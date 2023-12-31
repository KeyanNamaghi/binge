import { getRandomValuesFromArray } from '@/lib/utils'

export const getPictures = (n) => {
  const captions = getRandomValuesFromArray(photoPrompts, n)
  return getRandomValuesFromArray(pictures, n).map((picture, index) => ({
    image: picture,
    caption: Math.random() > 0.5 ? captions[index] : '',
  }))
}

export const getRandomPictureIds = (n) => {
  const captions = getRandomValuesFromArray(photoPrompts, n).map((caption) => photoPrompts.findIndex((prompt) => caption === prompt))

  return getRandomValuesFromArray(pictures, n).map((picture, index) => {
    const pictureIndex = pictures.findIndex((val) => val === picture)
    const captionIndex = Math.random() > 0.2 ? captions[index] : 0

    return [pictureIndex, captionIndex]
  })
}

export const getPictureById = ([pictureId, captionId]) => {
  return { image: pictures[pictureId], caption: photoPrompts[captionId] }
}

const pictures = [
  'blep.jpeg',
  'comfy.jpeg',
  'lazy.jpeg',
  'say-cheese.jpeg',
  'pose.jpeg',
  'workout.jpeg',
  'pictures/334275767_167310559046770_1145251808879196472_n.jpg',
  'pictures/364281372_1120881312218013_444860319634315876_n.jpg',
  'pictures/375127332_824886522616724_7616751753568618199_n.jpg',
  'pictures/348680648_227012760039264_7851460015652413790_n.jpg',
  'pictures/365446077_641172351300124_4432988787450328860_n.jpg',
  'pictures/376021820_690372149275019_2031247896064072540_n.jpg',
  'pictures/354233808_940840473814326_5255717792863966580_n.jpg',
  'pictures/365948501_1339034007018621_1913386644881722081_n.jpg',
  'pictures/377865450_333800932382066_2217903596787651771_n.jpg',
  'pictures/356611152_786914043105151_6305102033013829371_n.jpg',
  'pictures/366505916_829358238478159_1444276326609682817_n.jpg',
  'pictures/381240944_1517210002150370_671733012394076499_n.jpg',
  'pictures/356775926_1459157988234604_2305271856920563675_n.jpg',
  'pictures/367511160_350145167338729_3261781404396139955_n.jpg',
  'pictures/386843728_799991818594189_8972986475470706988_n.jpg',
  'pictures/357663138_332721222654365_3958720256764725411_n.jpg',
  'pictures/368752876_1867003733693495_7741921967056168198_n.jpg',
  'pictures/394095549_851799086613517_1522825714113853512_n.jpg',
  'pictures/359075651_968003537789708_7048737739558436987_n.jpg',
  'pictures/369769276_687628409936611_7954128220240126378_n.jpg',
  'pictures/395562940_1267091703933031_1699708590657045888_n.jpg',
  'pictures/361120890_603969111882700_7617925892836120981_n.jpg',
  'pictures/370034550_851609586051847_2779862925162270505_n.jpg',
  'pictures/396119291_234943169595248_4100893345849204404_n.jpg',
  'pictures/361567970_320474167000693_2956155695863318229_n.jpg',
  'pictures/372122085_595134549243859_2891073628359993034_n.jpg',
  'pictures/398594615_1300125687147623_679355192394431471_n.jpg',
  'pictures/362274162_1767465347007050_4332739429006053788_n.jpg',
  'pictures/372440143_3592420304367035_7576006166236884483_n.jpg',
  'pictures/401686785_1399933647262093_2059284290518798714_n.jpg',
  'pictures/364207780_2318674058317640_1188176409374963681_n.jpg',
  'pictures/372941207_619887916996232_3824994159119081435_n.jpg',
  'pictures/402107995_297075806566301_8092501728345521620_n.jpg',
  'pictures/399836266_1494159021316905_1314616604331792876_n.jpg',
  'pictures/400000000_168068029725162_7934212902706517417_n.jpg',
  'pictures/403677486_168068029725162_7934212902706517417_n.jpg',
]

const photoPrompts = [
  '',
  'Caught in the act',
  'My favorite mischief',
  'The face I make when plotting a heist',
  'My reaction when I find the perfect dumpster',
  "In the raccoon world, I'm the expert at",
  'The masked side of my personality',
  'A glimpse into my nocturnal charm',
  'In disguise: my go-to evening look',
  'Expressing mischief through a subtle glance',
  'Whispers of my raccoon instincts',
  'Understated charm: the raccoon edition',
  'My guilty pleasure',
  'The hidden view from my secret retreat',
  'My quarter-life crisis looks like',
  'This is my best side',
  'I thought I had deleted this',
  'The world through my morning coffee',
  'What Friday night at home looks like',
  'The last thing that made me laugh',
  'Describing my ideal date in one image',
  'If my life were a movie poster',
  'What success looks like for me',
  'If I were a superhero, my costume would be',
  'My creative process in a snapshot',
  'My idea of a perfect lazy Sunday',
  'This is my happy place',
  'The most important item in my bag',
  'My reaction to a surprise',
  'If my life had a tagline, it would be',
  'Behind-the-scenes of my daily hustle',
  "My interpretation of 'casual Friday'",
  'The first thing I do in the morning',
  "The one thing I can't live without",
  'My idea of a perfect date night',
  'This is my power pose',
  'The last thing I cooked or baked',
  "If I were a meme, I'd be",
]
