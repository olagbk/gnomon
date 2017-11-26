'use strict';

module.exports = {
     up: function up(queryInterface, Sequelize) {
          return queryInterface.bulkInsert('posts', [{
               id: 1,
               title: 'Howl, Part I',
               createdAt: new Date(),
               updatedAt: new Date(),
               body: 'I saw the best minds of my generation destroyed by madness,\n     starving hysterical naked,\ndragging themselves through the negro streets at dawn looking \n     for an angry fix,\nangelheaded hipsters burning for the ancient heavenly\n     connection to the starry dynamo in the machinery of night,\nwho poverty and tatters and hollow-eyed and high sat up smoking \n     in the supernatural darkness of cold-water flats floating \n     across the tops of cities contemplating jazz,\nwho bared their brains to Heaven under the El and saw\n     Mohammedan angels staggering on tenement roofs \n     illuminated,\nwho passed through universities with radiant cool eyes\n     hallucinating Arkansas and Blake-light tragedy among the \n     scholars of war,\nwho were expelled from the academies for crazy & publishing \n     obscene odes on the windows of the skull,\nwho cowered in unshaven rooms in underwear, burning their \n     money in wastebaskets and listening to the Terror through\n     the wall,\nwho got busted in their pubic beards returning through Laredo \n     with a belt of marijuana for New York,\nwho ate fire in paint hotels or drank turpentine in Paradise \n     Alley, death, or purgatoried their torsos night after night\nwith dreams, with drugs, with waking nightmares, alcohol and\n     cock and endless balls,\nincomparable blind streets of shuddering cloud and lightning in \n     the mind leaping toward poles of Canada & Paterson, \n     illuminating all the motionless world of Time between,\nPeyote solidities of halls, backyard green tree cemetery dawns,\n     wine drunkenness over the rooftops, storefront boroughs of \n     teahead joyride neon blinking traffic light, sun and moon \n     and tree vibrations in the roaring winter dusks of Brooklyn, \n     ashcan rantings and kind king light of mind,\nwho chained themselves to subways for the endless ride from \n     Battery to holy Bronx on benzedrine until the noise of \n     wheels and children brought them down shuddering \n     mouth-wracked and battered bleak of brain all drained of \n     brilliance in the drear light of Zoo,\nwho sank all night in submarine light of Bickford\u2019s floated out \n     and sat through the stale beer afternoon in desolate \n     Fugazzi\u2019s, listening to the crack of doom on the hydrogen \n     jukebox, \nwho talked continuously seventy hours from park to pad to bar to \n     Bellevue to museum to the Brooklyn Bridge,\na lost battalion of platonic conversationalists jumping down the \n     stoops off fire escapes off windowsills of Empire State out \n     of the moon,\nyacketayakking screaming vomiting whispering facts and \n     memories and anecdotes and eyeball kicks and shocks of \n     hospitals and jails and wars,\nwhole intellects disgorged in total recall for seven days and \n     nights with brilliant eyes, meat for the Synagogue cast on \n     the pavement,\nwho vanished into nowhere Zen New Jersey leaving a trail of \n     ambiguous picture postcards of Atlantic City Hall,\nsuffering Eastern sweats and Tangerian bone-grindings and \n     migraines of China under junk-withdrawal in Newark\u2019s bleak \n     furnished room,\nwho wandered around and around at midnight in the railroad\n     yard wondering where to go, and went, leaving no broken\n     hearts,\nwho lit cigarettes in boxcars boxcars boxcars racketing\n     through snow toward lonesome farms in grandfather night,\nwho studied Plotinus Poe St. John of the Cross telepathy and \n     bop kabbalah because the cosmos instinctively vibrated at\n     their feet in Kansas, who loned it through the streets of\n     Idaho seeking visionary indian angels who were visionary\n     indian angels,\nwho thought they were only mad when Baltimore gleamed in\n     supernatural ecstasy,\nwho jumped in limousines with the Chinaman of Oklahoma on\n     the impulse of winter midnight streetlight smalltown rain,\nwho lounged hungry and lonesome through Houston seeking jazz\n     or sex or soup, and followed the brilliant Spaniard to\n     converse about America and Eternity, a hopeless task, and\n     so took ship to Africa,\nwho disappeared into the volcanoes of Mexico leaving behind\n     nothing but the shadow of dungarees and the lava and ash of\n     poetry scattered in fireplace Chicago,\nwho reappeared on the West Coast investigating the FBI in\n     beards and shorts with big pacifist eyes sexy in their dark\n     skin passing out incomprehensible leaflets,\nwho burned cigarette holes in their arms protesting the\n     narcotic tobacco haze of Capitalism,\nwho distributed Supercommunist pamphlets in Union Square\n     weeping and undressing while the sirens of Los Alamos\n     wailed them down, and wailed down Wall, and the Staten\n     Island ferry also wailed,\nwho broke down crying in white gymnasiums naked and\n     trembling before the machinery of other skeletons,\nwho bit detectives in the neck and shrieked with delight in\n     policecars for committing no crime but their own wild\n     cooking pederasty and intoxication,\nwho howled on their knees in the subway and were dragged off\n     the roof waving genitals and manuscripts,\nwho let themselves be fucked in the ass by saintly motorcyclists,\n     and screamed with joy,\nwho blew and were blown by those human seraphim, the sailors,\n     caresses of Atlantic and Caribbean love,\nwho balled in the morning in the evenings in rosegardens and\n     the grass of public parks and cemeteries scattering their\n     semen freely to whomever come who may,\nwho hiccuped endlessly trying to giggle but wound up with a sob\n     behind a partition in a Turkish Bath when the blond & naked\n     angel came to pierce them with a sword,\nwho lost their loveboys to the three old shrews of fate the one  \n     eyed shrew of the heterosexual dollar the one eyed shrew\n     that winks out of the womb and the one eyed shrew that does\n     nothing but sit on her ass and snip the intellectual golden\n     threads of the craftsman\u2019s loom.\nwho copulated ecstatic and insatiate with a bottle of beer a\n     sweetheart a package of cigarettes a candle and fell off the\n     bed, and continued along the floor and down the hall and\n     ended fainting on the wall with a vision of ultimate cunt\n     and come eluding the last gyzym of consciousness,\nwho sweetened the snatches of a million girls trembling in the\n     sunset, and were red eyed in the morning but prepared to\n     sweeten the snatch of the sunrise, flashing buttocks under\n     barns and naked in the lake,\nwho went out whoring through Colorado in myriad stolen\n     night-cars, N.C., secret hero of these poems, cocksman and\n     Adonis of Denver--joy to the memory of his innumerable lays\n     of girls in empty lots & diner backyards, moviehouses\u2019\n     rickety rows, on mountaintops in caves or with gaunt\n     waitresses in familiar roadside lonely petticoat upliftings\n     & especially secret gas-station solipsisms of johns, &\n     hometown alleys too,\nwho faded out in vast sordid movies, were shifted in dreams,\n     woke on a sudden Manhattan, and picked themselves up out\n     of basements hungover with heartless Tokay and horrors of\n     Third Avenue iron dreams & stumbled to unemployment\n     offices,\nwho walked all night with their shoes full of blood on the\n     snowbank docks waiting for a door in the East River to open\n     to a room full of steamheat and opium,\nwho created great suicidal dramas on the apartment cliff-banks of\n     the Hudson under the wartime blue floodlight of the moon &\n     their heads shall be crowned with laurel in oblivion,\nwho ate the lamb stew of the imagination or digested the crab at\n     the muddy bottom of the rivers of Bowery,\nwho wept at the romance of the streets with their pushcarts full\n     of onions and bad music,\nwho sat in boxes breathing in the darkness under the bridge, and\n     rose up to build harpsichords in their lofts,\n\nwho coughed on the sixth floor of Harlem crowned with flame\n     under the tubercular sky surrounded by orange crates of\n     theology,\nwho scribbled all night rocking and rolling over lofty incantations\n     which in the yellow morning were stanzas of gibberish,\nwho cooked rotten animals lung heart feet tail borsht & tortillas\n     dreaming of the pure vegetable kingdom,\nwho plunged themselves under meat trucks looking for an egg,\nwho threw their watches off the roof to cast their ballot for\n     Eternity outside of Time, & alarm clocks fell on their heads\n     every day for the next decade,\nwho cut their wrists three times successively unsuccessfully, gave\n     up and were forced to open antique stores where they thought\n     they were growing old and cried,\nwho were burned alive in their innocent flannel suits on Madison\n     Avenue amid blasts of leaden verse & the tanked-up clatter of\n     the iron regiments of fashion & the nitroglycerine shrieks of\n     the fairies of advertising & the mustard gas of sinister\n     intelligent editors, or were run down by the drunken taxicabs\n     of Absolute Reality,\nwho jumped off the Brooklyn Bridge this actually happened and\n     walked away unknown and forgotten into the ghostly daze of\n     Chinatown soup alleyways & firetrucks, not even one free\n     beer,\nwho sang out of their windows in despair, fell out of the subway\n     window, jumped in the filthy Passaic, leaped on negroes, cried\n     all over the street, danced on broken wineglasses barefoot\n     smashed phonograph records of nostalgic European 1930s\n     German jazz finished the whiskey and threw up groaning into\n     the bloody toilet, moans in their ears and the blast of\n     colossal steamwhistles,\nwho barreled down the highways of the past journeying to the\n     each other\u2019s hotrod-Golgotha jail-solitude watch or\n     Birmingham jazz incarnation, who drove crosscountry\n     seventytwo hours to find out if I had a vision or you had\n     a vision or he had a vision to find out Eternity,\nwho journeyed to Denver, who died in Denver, who came back to\n     Denver & waited in vain, who watched over Denver &\n     brooded & loned in Denver and finally went away to find\n     out the Time, & now Denver is lonesome for her heroes,\nwho fell on their knees in hopeless cathedrals praying for each\n     other\u2019s salvation and light and breasts, until the soul\n     illuminated its hair for a second, \nwho crashed through their minds in jail waiting for impossible\n     criminals with golden heads and the charm of reality in their\n     hearts who sang sweet blues to Alcatraz,\nwho retired to Mexico to cultivate a habit, or Rocky Mount to\n     tender Buddha or Tangiers to boys or Southern Pacific to the\n     black locomotive or Harvard to Narcissus to Woodlawn to the\n     daisychain or grave,\nwho demanded sanity trials accusing the radio of hypnotism &\n     were left with their insanity & their hands & a hung jury,\nwho threw potato salad at CCNY lecturers on Dadaism and\n     subsequently presented themselves on the granite steps of\n     the madhouse with shaven heads and harlequin speech of\n     suicide, demanding instantaneous lobotomy,\nand who were given instead the concrete void of insulin Metrazol\n     electricity hydrotherapy psychotherapy occupational therapy\n     pingpong & amnesia,\nwho in humorless protest overturned only one symbolic pingpong\n     table, resting briefly in catatonia,\nreturning years later truly bald except for a wig of blood, and\n     tears and fingers, to the visible madman doom of the wards of\n     the madtowns of the East,\nPilgrim State\u2019s Rockland\u2019s and Greystone\u2019s foetid halls, bickering\n     with the echoes of the soul, rocking and rolling in the\n     midnight solitude-bench dolmen-realms of love, dream of life\n     a nightmare, bodies turned to stone as heavy as the moon,\nwith mother finally ******, and the last fantastic book flung out\n     of the tenement window, and the last door closed at 4 a.m.\n     and the last telephone slammed at the wall in reply and the\n     last furnished room emptied down to the last piece of mental\n     furniture, a yellow paper rose twisted on a wire hanger in the\n     closet, and even that imaginary, nothing but a hopeful little\n     bit of hallucination--\nah, Carl, while you are not safe I am not safe, and now you\u2019re\n     really in the total animal soup of time--\nand who therefore ran through the icy streets obsessed with a\n     sudden flash of the alchemy of the use of the ellipse the\n     catalog the meter & the vibrating plane,\nwho dreamt and made incarnate gaps in Time & Space through\n     images juxtaposed, and trapped the archangel of the soul\n     between 2 visual images and joined the elemental verbs and\n     set the noun and dash of consciousness together jumping\n     with sensation of Pater Omnipotens Aeterna Deus\nto recreate the syntax and measure of poor human prose and\n     stand before you speechless and intelligent and shaking\n     with shame, rejected yet confessing out the soul to conform\n     to the rhythm of thought in his naked and endless head,\nthe madman bum and angel beat in Time, unknown, yet putting\n     down here what might be left to say in time come after\n     death,\nand rose reincarnate in the ghostly clothes of jazz in the goldhorn\n     shadow of the band and blew the suffering of America\u2019s naked\n     mind for love into an eli eli lamma lamma sabacthani\n     saxophone cry that shivered the cities down to the last radio\nwith the absolute heart of the poem of life butchered out of their\n     own bodies good to eat a thousand years.'
          }, {
               id: 2,
               title: 'The victor will never be asked if he told the truth',
               createdAt: new Date(),
               updatedAt: new Date(),
               body: 'The stronger must dominate and not mate with the weaker, which would signify the sacrifice of its own higher nature. Only the born weakling can look upon this principle as cruel, and if he does so it is merely because he is of a feebler nature and narrower mind; for if such a law did not direct the process of evolution then the higher development of organic life would not be conceivable at all.'
          }, {
               id: 3,
               title: 'Words build bridges into unexplored regions.',
               createdAt: new Date(),
               updatedAt: new Date()
          }, {
               id: 4,
               title: 'pierdolnie',
               createdAt: new Date(),
               updatedAt: new Date(),
               body: 'no zobaczysz mati jak to wszystko pierdolnie\nczekajcie tylko, jak to wszystko pierdolnie\ntylko patrze\u0107 jak to wszystko pierdolnie\nna Ukrainie czo\u0142gi, zaraz to wszystko pierdolnie\nna Islandii wulkan wybuch\u0142, m\xF3wi\u0142em, \u017Ce to wszystko pierdolnie\nnooo, teraz to ju\u017C na pewno to wszystko pierdolnie\na nie m\xF3wi\u0142em, \u017Ce to wszystko pierdolnie?'
          }, {
               id: 5,
               title: 'RIGCZ',
               createdAt: new Date(),
               updatedAt: new Date(),
               body: 'No i ja si\u0119 pytam cz\u0142owieku dumny ty jeste\u015B z siebie zdajesz sobie spraw\u0119 z tego co robisz?masz ty wog\xF3le rozum i godno\u015B\u0107 cz\u0142owieka?Ja nie wiem ale \u017Ca\u0142osny typek z ciebie, chyba nie pomy\u015Bla\u0142es nawet co robisz i kogo obra\u017Casz, mo\u017Cesz sobie obra\u017Cac tych co na to zas\u0142u\u017Cyli sobie ale nie naszego papie\u017Ca polaka naszego rodaka wielk\u0105 osob\u0119 ,i tak wyj\u0105tkowa i wa\u017Cn\u0105 bo to nie jest kto\u015B tam taki sobie \u017Ce mo\u017Cesz go sobie wy\u015Bmia\u0107 bo tak ci si\u0119 podoba nie wiem w jakiej ty si\u0119 wychowa\u0142es rodzinie ale chyba ty nie wiem nie rozumiesz co to jest wiara'
          }, {
               id: 6,
               title: 'The true knowledge',
               createdAt: new Date(),
               updatedAt: new Date(),
               body: 'Life is a process of breaking down and using other matter, and if need be, other life. Therefore, life is aggression, and successful life is successful aggression. Life is the scum of matter, and people are the scum of life. There is nothing but matter, forces, space and time, which together make power. Nothing matters, except what matters to you. Might makes right, and power makes freedom. You are free to do whatever is in your power, and if you want to survive and thrive you had better do whatever is in your interests. If your interests conflict with those of others, let the others pit their power against yours, everyone for theirselves. If your interests coincide with those of others, let them work together with you, and against the rest. We are what we eat, and we eat everything.\nAll that you really value, and the goodness and truth and beauty of life, have their roots in this apparently barren soil.\n\nThis is the true knowledge.\n\nWe had founded our idealism on the most nihilistic implications of science, our socialism on crass self-interest, our peace on our capacity for mutual destruction, and our liberty on determinism. We had replaced morality with convention, bravery with safety, frugality with plenty, philosophy with science, stoicism with anaesthetics and piety with immortality. The universal acid of the true knowledge had burned away a world of words, and exposed a universe of things.\n\nThings we could use.' }], {}).then(function () {
               return queryInterface.bulkInsert('tags', [{
                    id: 1,
                    name: 'hitler',
                    count: 2
               }, {
                    id: 2,
                    name: 'copypasta',
                    count: '2'
               }, {
                    id: 3,
                    name: 'poetry',
                    count: 2
               }, {
                    id: 4,
                    name: 'NSFK',
                    count: 2
               }, {
                    id: 5,
                    name: 'PL',
                    count: 2
               }, {
                    id: 6,
                    name: 'politics',
                    count: 1
               }], {}).then(function () {
                    return queryInterface.bulkInsert('PostTags', [{
                         postId: 1,
                         tagId: 3,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 1,
                         tagId: 4,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 2,
                         tagId: 1,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 3,
                         tagId: 1,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 4,
                         tagId: 2,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 4,
                         tagId: 3,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 4,
                         tagId: 4,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 4,
                         tagId: 5,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 4,
                         tagId: 6,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 5,
                         tagId: 2,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 5,
                         tagId: 5,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }, {
                         postId: 6,
                         tagId: 6,
                         createdAt: new Date(),
                         updatedAt: new Date()
                    }], {});
               });
          });
     },
     down: function down(queryInterface, Sequelize) {
          return Promise.all([queryInterface.bulkDelete('posts', null, {}), queryInterface.bulkDelete('tags', null, {}), queryInterface.bulkDelete('PostTags', null, {})]);
     }
};