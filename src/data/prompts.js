import { getRandomFromList, getRandomValuesFromArray } from '@/lib/utils'

export const getRandomPrompts = (n) => {
  return getRandomValuesFromArray(prompts, n).map(({ prompt, answers }) => {
    return { prompt, answer: getRandomFromList(answers) }
  })
}

export const prompts = [
  {
    prompt: 'A boundary of mine is',
    answers: [
      'Respecting personal space, especially when it comes to midnight snack raids',
      'Never stealing the last slice of pizza, even raccoons have limits',
      'Avoiding water at all costs, a soggy raccoon is not a happy raccoon',
    ],
  },
  {
    prompt: 'A daily essential',
    answers: [
      "A good laugh, life's too short to be serious all the time",
      'A cozy nap in the sun, it rejuvenates both body and spirit',
      'A quick trash scouting mission, you never know what treasures the night holds',
    ],
  },
  {
    prompt: 'A dream home must include',
    answers: [
      'A secret room filled with fluffy raccoon plushies and an endless supply of marshmallows',
      'A rooftop garden for midnight stargazing and snack planning',
      'A state-of-the-art trash can with a built-in snack dispenser',
    ],
  },
  {
    prompt: "A friend's review of me",
    answers: [
      'Always ready for an adventure, and the only trash I tolerate is the funny kind',
      'The ultimate wingman, I can charm my way into any dumpster',
      'The life of the party, my antics are the stuff of legend',
    ],
  },
  {
    prompt: 'A life goal of mine',
    answers: ['Mastering the art of dumpster-diving in style', 'Aspiring to be the raccoon that finally outsmarts the neighborhood cat', 'Establishing a raccoon sanctuary for all my furry friends'],
  },
  {
    prompt: 'A quick rant about',
    answers: [
      "People who don't appreciate the comedic genius of raccoons – seriously, we're hilarious!",
      'The injustice of being shooed away when all I want is a snack!',
      'The lack of recognition for raccoons as the true rulers of the night',
    ],
  },
  {
    prompt: 'A random fact I love is',
    answers: [
      'Raccoons can solve complex problems, but we still struggle with opening a bag of chips quietly',
      'Despite our mischievous reputation, raccoons are also excellent parents',
      "Raccoons have a distinct 'washing' behavior for their food, even if it's not near water",
    ],
  },
  {
    prompt: 'A shower thought I recently had',
    answers: [
      'If life gives you trash, make a raccoon party out of it!',
      'What if our masks are just our way of being fashion-forward?',
      'Maybe the real treasure is the friends we make along the dumpster',
    ],
  },
  {
    prompt: 'All I ask is that you',
    answers: [
      "Join me on a moonlit rooftop heist, it's the perfect date, I promise",
      "Share your favorite late-night snack recipe, let's create a masterpiece together",
      'Be open to the possibility of a surprise midnight picnic, the best kind of adventure',
    ],
  },
  {
    prompt: "Apparently, my life's soundtrack is",
    answers: ['A mix of funky beats and the rustling sound of garbage bags', 'The rhythmic tapping of paws on a moonlit street', 'The distant melody of a raccoon party in full swing'],
  },
  {
    prompt: 'Ask me anything about',
    answers: [
      "The best hiding spots in the city, I'm practically a ninja",
      "The art of creating the perfect raccoon disguise, it's all about blending in",
      'The secret language of trash can lids, each clang tells a different story',
    ],
  },
  {
    prompt: 'Best travel story',
    answers: [
      'Once snuck into a zoo, made friends with a panda. It was a wild time',
      'Embarked on a cross-city adventure in pursuit of the legendary garbage can',
      'Visited a theme park and became the unofficial mascot for the day',
    ],
  },
  {
    prompt: "Biggest risk I've taken",
    answers: [
      'Trying to outsmart a dog to get to a particularly enticing garbage can',
      'Venturing into uncharted territory for the promise of a hidden snack',
      'Attempting a midnight snack heist in the heart of a busy neighborhood',
    ],
  },
  {
    prompt: 'Can we talk about',
    answers: [
      "The underrated beauty of trash pandas? I'm a living masterpiece",
      'The proper technique for executing the perfect raccoon waddle',
      'The unsolved mystery of who stole the cookies from the cookie jar',
    ],
  },
  {
    prompt: 'Change my mind about',
    answers: [
      "Not having a raccoon as your spirit animal, we're the real party animals",
      "The idea that a night out can't involve some element of mischief",
      "Underestimating the charm of a raccoon's masked and mischievous demeanor",
    ],
  },
  {
    prompt: 'Choose our first date',
    answers: [
      "Let's explore a new city by night, scavenging for hidden gems",
      'How about a moonlit picnic under the stars with a view of the city skyline?',
      'Embark on a midnight adventure to find the perfect late-night snack spot',
    ],
  },
  {
    prompt: 'Cook with me',
    answers: [
      "And we'll create a culinary masterpiece out of whatever's left in the fridge",
      "Let's whip up a gourmet meal using only the finest discarded ingredients",
      "Join me in the kitchen for a cooking escapade that's sure to be unforgettable",
    ],
  },
  {
    prompt: 'Dating me is like',
    answers: [
      'A rollercoaster, there will be unexpected twists, turns, and probably some snacks involved',
      'A cozy night in with laughter, good company, and a surprise midnight snack',
      'An adventure filled with whimsy, laughter, and the occasional raccoon mischief',
    ],
  },
  {
    prompt: 'Do you agree or disagree that',
    answers: [
      'Raccoons are the unsung heroes of the animal kingdom?',
      'The raccoon waddle should be recognized as a legitimate dance move',
      'Late-night snacks are the key to unlocking true happiness',
    ],
  },
  {
    prompt: "Don't hate me if I",
    answers: [
      'Steal a fry or two from your plate, sharing is caring, right?',
      "Plan a surprise midnight snack raid, it's just my way of spreading joy",
      'Interrupt a serious conversation with a perfectly timed raccoon joke',
    ],
  },
  {
    prompt: 'First round is on me if',
    answers: ['We find a cozy dumpster with a view', 'We discover a hidden snack stash during our midnight escapades', 'We stumble upon a late-night food truck with the best treats in town'],
  },
  {
    prompt: 'Give me travel tips for',
    answers: [
      "Places with the best trash options, I'm always up for an adventure",
      'Finding the most scenic spots for a moonlit raccoon party',
      'Locating the best late-night snack spots in every city we visit',
    ],
  },
  {
    prompt: 'Give me your honest opinion about',
    answers: [
      "Raccoon fashion, we might not wear clothes, but we've got style",
      'The art of raccoon communication through expressive tail movements',
      'The secret society of raccoons and their impact on world events',
    ],
  },
  {
    prompt: 'Green flags I look for',
    answers: [
      'A love of late-night snacks, a good sense of humor, and an appreciation for masked bandits',
      'An adventurous spirit and a willingness to explore the night together',
      'The ability to appreciate the beauty of a perfectly executed trash dive',
    ],
  },
  {
    prompt: 'My secret talent',
    answers: [
      'I can outsmart any raccoon-proof trash can',
      'I have a talent for finding the most elusive midnight snacks',
      'I can communicate with other raccoons using a secret language of chirps and chitters',
    ],
  },
  {
    prompt: 'Guess the song',
    answers: [
      "It's the one that plays when you stumble upon a treasure trove of discarded pizza",
      'The soundtrack to a late-night raccoon party in full swing',
      "The rhythm of a raccoon's paws on a quiet moonlit street",
    ],
  },
  {
    prompt: 'Hi from me and my pet',
    answers: [
      "Trash can lid, it's my trusty sidekick in all my adventures",
      'Raccoon plushie, my cuddly companion in the quest for the perfect snack',
      'Raccoon figurine, a reminder of the mischief and joy that each night brings',
    ],
  },
  {
    prompt: 'How to pronounce my name',
    answers: [
      'You can just call me the life of the party',
      "It's pronounced like the rustling of leaves in the wind, mysterious and playful",
      "Just say it with a mischievous twinkle in your eye, and you'll get it right",
    ],
  },
  {
    prompt: "I bet you can't",
    answers: [
      'Resist the charm of a raccoon, challenge accepted?',
      "Outsmart me in a game of raccoon trivia, I'm the reigning champion",
      'Keep a straight face when I unleash my arsenal of raccoon jokes',
    ],
  },
  {
    prompt: 'I feel most supported when',
    answers: ['Someone appreciates my trash-hauling prowess', "I'm given the freedom to express my raccoon individuality", 'Laughter fills the air during our late-night escapades'],
  },
  {
    prompt: 'I geek out on',
    answers: ["The science of trash decomposition, it's a fascinating field", 'The art of crafting the perfect raccoon disguise', 'The history of legendary raccoon heists throughout the ages'],
  },
  {
    prompt: 'I get myself out of a funk by',
    answers: [
      'Doing the raccoon dance, it involves a lot of wiggling',
      'Taking a stroll under the moonlight, nature has a magical way of lifting my spirits',
      'Planning the next great raccoon adventure, the anticipation is exhilarating',
    ],
  },
  {
    prompt: 'I go crazy for',
    answers: [
      'Midnight snacks and impromptu dance parties under the stars',
      'The thrill of discovering a hidden snack stash during our adventures',
      "A cozy nest of leaves under the moonlight for the perfect night's rest",
    ],
  },
  {
    prompt: 'I hype myself up by',
    answers: [
      "Reminding myself that I'm the raccoon everyone wants at their party",
      'Practicing my raccoon waddle in front of the mirror, perfection takes practice',
      'Creating a mental checklist of all the fantastic snacks waiting to be discovered',
    ],
  },
  {
    prompt: 'I know the best spot in town for',
    answers: ["Dumpster diving, it's an art form, really", 'A secluded midnight picnic under the stars', 'Finding the perfect vantage point for raccoon observation'],
  },
  {
    prompt: 'I recently discovered that',
    answers: ['Raccoons are the unsung heroes of the night', 'The sound of rustling leaves is surprisingly therapeutic', "There's an art to crafting the perfect raccoon disguise for any occasion"],
  },
  {
    prompt: 'I want someone who',
    answers: [
      'Appreciates my raccoon charm and is willing to share their snacks',
      'Can match my enthusiasm for late-night adventures and laughter',
      'Understands the profound connection between a raccoon and their snacks',
    ],
  },
  {
    prompt: 'I wind down by',
    answers: [
      'Cozying up in a comfy pile of leaves and enjoying the night air',
      "Reflecting on the night's adventures while perched on a quiet rooftop",
      'Embracing the tranquility of the night with a leisurely stroll under the moonlight',
    ],
  },
  {
    prompt: 'I wish more people knew',
    answers: ['That raccoons are actually expert problem solvers', 'The joy that comes with a surprise midnight picnic', "The beauty of a raccoon's waddle, it's an art form"],
  },
  {
    prompt: "I won't shut up about",
    answers: ["The greatness of trash, it's a true treasure trove", 'The joy of discovering the perfect late-night snack', 'The legendary raccoon parties that define the essence of a good time'],
  },
  {
    prompt: "I'll brag about you to my friends if",
    answers: ['You can outwit me in a game of hide-and-seek', 'You share your favorite raccoon jokes, humor is the key to my heart', 'You embrace the thrill of a spontaneous midnight snack raid'],
  },
  {
    prompt: "I'll give you the set up, you guess the punchline",
    answers: [
      'Why did the raccoon cross the road? To find the hidden stash of snacks on the other side!',
      "What did the raccoon say to the trash can? You're my kind of treasure chest!",
      'How do raccoons keep their fur looking so sleek? They have a secret conditioner – dumpster juice!',
    ],
  },
  {
    prompt: "I'm convinced that",
    answers: ["Laughter is the best remedy, especially when you're a raccoon", 'The perfect midnight snack can solve any problem', "A raccoon's charm is the key to unlocking a world of adventure"],
  },
  {
    prompt: "I'm weirdly attracted to",
    answers: [
      "The smell of freshly discarded pizza, it's like my cologne",
      "The sound of rain on a tin roof, it's oddly comforting",
      "The sensation of diving into a pile of leaves, nature's fluffy carpet",
    ],
  },
  {
    prompt: "If loving this is wrong, I don't want to be right",
    answers: ['Dumpster-diving for gourmet leftovers', 'Midnight snacks and impromptu dance parties under the stars', 'Exploring the hidden treasures in a mysterious, dimly lit alleyway'],
  },
]
