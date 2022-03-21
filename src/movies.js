const movies = [
  {
    adult: false,
    backdrop_path: '/iPhDToxFzREctUA0ZQiYZamXsMy.jpg',
    genre: 'Comedy',
    id: 508947,
    original_language: 'en',
    original_title: 'Turning Red',
    overview:
      'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.',
    popularity: 10728.703,
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    release_date: '2022-03-10',
    title: 'Turning Red',
    video: false,
    vote_average: 7.5,
    vote_count: 632,
  },
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre: 'Comedy',
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    popularity: 9196.371,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.2,
    vote_count: 9922,
  },
  {
    adult: false,
    backdrop_path: '/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg',
    genre: 'Drama',
    id: 823625,
    original_language: 'en',
    original_title: 'Blacklight',
    overview:
      'Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.',
    popularity: 3020.045,
    poster_path: '/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
    release_date: '2022-02-10',
    title: 'Blacklight',
    video: false,
    vote_average: 5.6,
    vote_count: 159,
  },
  {
    adult: false,
    backdrop_path: '/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg',
    genre: 'Comedy',
    id: 696806,
    original_language: 'en',
    original_title: 'The Adam Project',
    overview:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.',
    popularity: 2993.047,
    poster_path: '/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg',
    release_date: '2022-03-11',
    title: 'The Adam Project',
    video: false,
    vote_average: 7.1,
    vote_count: 767,
  },
  {
    adult: false,
    backdrop_path: '/IYUD7rAIXzBM91TT3Z5fILUS7n.jpg',
    genre: 'Drama',
    id: 414906,
    original_language: 'en',
    original_title: 'The Batman',
    overview:
      'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    popularity: 2735.54,
    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    release_date: '2022-03-01',
    title: 'The Batman',
    video: false,
    vote_average: 8,
    vote_count: 2033,
  },
  {
    adult: false,
    backdrop_path: '/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
    genre: 'Comedy',
    id: 568124,
    original_language: 'en',
    original_title: 'Encanto',
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    popularity: 2482.33,
    poster_path: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
    release_date: '2021-11-24',
    title: 'Encanto',
    video: false,
    vote_average: 7.7,
    vote_count: 5401,
  },
  {
    adult: false,
    backdrop_path: '/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg',
    genre: 'Drama',
    id: 833425,
    original_language: 'en',
    original_title: 'No Exit',
    overview:
      'Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.',
    popularity: 2025.742,
    poster_path: '/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg',
    release_date: '2022-02-25',
    title: 'No Exit',
    video: false,
    vote_average: 6.5,
    vote_count: 233,
  },
  {
    adult: false,
    backdrop_path: '/7CamWBejQ9JQOO5vAghZfrFpMXY.jpg',
    genre: 'Comedy',
    id: 928381,
    original_language: 'fr',
    original_title: 'Sans répit',
    overview:
      "After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.",
    popularity: 1599.604,
    poster_path: '/9MP21x0OPv0R72obd63tMHssmGt.jpg',
    release_date: '2022-02-25',
    title: 'Restless',
    video: false,
    vote_average: 5.8,
    vote_count: 162,
  },
  {
    adult: false,
    backdrop_path: '/dK12GIdhGP6NPGFssK2Fh265jyr.jpg',
    genre: 'Drama',
    id: 512195,
    original_language: 'en',
    original_title: 'Red Notice',
    overview:
      "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    popularity: 1550.235,
    poster_path: '/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg',
    release_date: '2021-11-04',
    title: 'Red Notice',
    video: false,
    vote_average: 6.8,
    vote_count: 3260,
  },
  {
    adult: false,
    backdrop_path: '/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg',
    genre: 'Comedy',
    id: 760926,
    original_language: 'en',
    original_title: 'Gold',
    overview:
      'In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.',
    popularity: 1470.988,
    poster_path: '/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg',
    release_date: '2022-01-13',
    title: 'Gold',
    video: false,
    vote_average: 6.6,
    vote_count: 124,
  },
  {
    adult: false,
    backdrop_path: '/qBLEWvJNVsehJkEJqIigPsWyBse.jpg',
    genre: 'Drama',
    id: 585083,
    original_language: 'en',
    original_title: 'Hotel Transylvania: Transformania',
    overview:
      'When Van Helsing\'s mysterious invention, the "Monsterfication Ray," goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it\'s too late, and before they drive each other crazy.',
    popularity: 1316.505,
    poster_path: '/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg',
    release_date: '2022-02-25',
    title: 'Hotel Transylvania: Transformania',
    video: false,
    vote_average: 7,
    vote_count: 434,
  },
  {
    adult: false,
    backdrop_path: '/cugmVwK0N4aAcLibelKN5jWDXSx.jpg',
    genre: 'Comedy',
    id: 768744,
    original_language: 'ja',
    original_title:
      '僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション',
    overview:
      'A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.',
    popularity: 1254.772,
    poster_path: '/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg',
    release_date: '2021-08-06',
    title: "My Hero Academia: World Heroes' Mission",
    video: false,
    vote_average: 7.4,
    vote_count: 118,
  },
  {
    adult: false,
    backdrop_path: '/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg',
    genre: 'Drama',
    id: 774825,
    original_language: 'en',
    original_title: 'The Ice Age Adventures of Buck Wild',
    overview:
      "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
    popularity: 1245.23,
    poster_path: '/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg',
    release_date: '2022-01-28',
    title: 'The Ice Age Adventures of Buck Wild',
    video: false,
    vote_average: 7.1,
    vote_count: 805,
  },
  {
    adult: false,
    backdrop_path: '/4OTYefcAlaShn6TGVK33UxLW9R7.jpg',
    genre: 'Comedy',
    id: 476669,
    original_language: 'en',
    original_title: "The King's Man",
    overview:
      "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    popularity: 1222.114,
    poster_path: '/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg',
    release_date: '2021-12-22',
    title: "The King's Man",
    video: false,
    vote_average: 7,
    vote_count: 2013,
  },
  {
    adult: false,
    backdrop_path: '/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg',
    genre: 'Drama',
    id: 928999,
    original_language: 'en',
    original_title: 'Desperate Riders',
    overview:
      'After Kansas Red rescues young Billy from a card-game shootout, the boy asks Red for help protecting his family from the outlaw Thorn, who’s just kidnapped Billy’s mother, Carol. As Red and Billy ride off to rescue Carol, they run into beautiful, tough-as-nails Leslie, who’s managed to escape Thorn’s men. The three race to stop Thorn’s wedding to Carol with guns a-blazing - but does she want to be rescued?',
    popularity: 1206.559,
    poster_path: '/7pYYGm1dWZGkbJuhcuaHD6nE6k7.jpg',
    release_date: '2022-02-25',
    title: 'Desperate Riders',
    video: false,
    vote_average: 6,
    vote_count: 18,
  },
  {
    adult: false,
    backdrop_path: '/pnZ9NMxRqbcJ2dPNROIoregruv5.jpg',
    genre: 'Comedy',
    id: 753232,
    original_language: 'en',
    original_title: 'The Commando',
    overview:
      'An elite DEA agent returns home after a failed mission when his family makes an unexpected discovery in their house – a stash of money worth $3 million. They soon face the danger and threat of a newly released criminal and his crew, who will do whatever it takes to retrieve the money, including kidnap the agent’s daughters. Stakes are high and lives are at risk in this head-to-head battle as the agent stops at nothing to protect his family against the money-hungry criminals.',
    popularity: 1204.323,
    poster_path: '/mn1GYIQ1tvFuuu0YBNZBvrHyrkO.jpg',
    release_date: '2022-01-07',
    title: 'The Commando',
    video: false,
    vote_average: 6.8,
    vote_count: 54,
  },
  {
    adult: false,
    backdrop_path: '/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg',
    genre: 'Drama',
    id: 524434,
    original_language: 'en',
    original_title: 'Eternals',
    overview:
      'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.',
    popularity: 1168.857,
    poster_path: '/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
    release_date: '2021-11-03',
    title: 'Eternals',
    video: false,
    vote_average: 7.2,
    vote_count: 4883,
  },
  {
    adult: false,
    backdrop_path: '/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg',
    genre: 'Comedy',
    id: 646385,
    original_language: 'en',
    original_title: 'Scream',
    overview:
      'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
    popularity: 1167.183,
    poster_path: '/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
    release_date: '2022-01-12',
    title: 'Scream',
    video: false,
    vote_average: 6.8,
    vote_count: 949,
  },
  {
    adult: false,
    backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
    genre: 'Drama',
    id: 438695,
    original_language: 'en',
    original_title: 'Sing 2',
    overview:
      'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
    popularity: 1154.578,
    poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
    release_date: '2021-12-01',
    title: 'Sing 2',
    video: false,
    vote_average: 8.2,
    vote_count: 2280,
  },
  {
    adult: false,
    backdrop_path: '/mruT954ve6P1zquaRs6XG0hA5k9.jpg',
    genre: 'Comedy',
    id: 800510,
    original_language: 'en',
    original_title: 'Kimi',
    overview:
      'A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.',
    popularity: 1138.65,
    poster_path: '/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg',
    release_date: '2022-02-10',
    title: 'Kimi',
    video: false,
    vote_average: 6.3,
    vote_count: 261,
  },
]

export default movies
