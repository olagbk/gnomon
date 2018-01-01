'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        id: 1,
        title: 'Howl, Part I',
        createdAt: new Date(),
        updatedAt: new Date(),
        body: `I saw the best minds of my generation destroyed by madness,
     starving hysterical naked,
dragging themselves through the negro streets at dawn looking 
     for an angry fix,
angelheaded hipsters burning for the ancient heavenly
     connection to the starry dynamo in the machinery of night,
who poverty and tatters and hollow-eyed and high sat up smoking 
     in the supernatural darkness of cold-water flats floating 
     across the tops of cities contemplating jazz,
who bared their brains to Heaven under the El and saw
     Mohammedan angels staggering on tenement roofs 
     illuminated,
who passed through universities with radiant cool eyes
     hallucinating Arkansas and Blake-light tragedy among the 
     scholars of war,
who were expelled from the academies for crazy & publishing 
     obscene odes on the windows of the skull,
who cowered in unshaven rooms in underwear, burning their 
     money in wastebaskets and listening to the Terror through
     the wall,
who got busted in their pubic beards returning through Laredo 
     with a belt of marijuana for New York,
who ate fire in paint hotels or drank turpentine in Paradise 
     Alley, death, or purgatoried their torsos night after night
with dreams, with drugs, with waking nightmares, alcohol and
     cock and endless balls,
incomparable blind streets of shuddering cloud and lightning in 
     the mind leaping toward poles of Canada & Paterson, 
     illuminating all the motionless world of Time between,
Peyote solidities of halls, backyard green tree cemetery dawns,
     wine drunkenness over the rooftops, storefront boroughs of 
     teahead joyride neon blinking traffic light, sun and moon 
     and tree vibrations in the roaring winter dusks of Brooklyn, 
     ashcan rantings and kind king light of mind,
who chained themselves to subways for the endless ride from 
     Battery to holy Bronx on benzedrine until the noise of 
     wheels and children brought them down shuddering 
     mouth-wracked and battered bleak of brain all drained of 
     brilliance in the drear light of Zoo,
who sank all night in submarine light of Bickford’s floated out 
     and sat through the stale beer afternoon in desolate 
     Fugazzi’s, listening to the crack of doom on the hydrogen 
     jukebox, 
who talked continuously seventy hours from park to pad to bar to 
     Bellevue to museum to the Brooklyn Bridge,
a lost battalion of platonic conversationalists jumping down the 
     stoops off fire escapes off windowsills of Empire State out 
     of the moon,
yacketayakking screaming vomiting whispering facts and 
     memories and anecdotes and eyeball kicks and shocks of 
     hospitals and jails and wars,
whole intellects disgorged in total recall for seven days and 
     nights with brilliant eyes, meat for the Synagogue cast on 
     the pavement,
who vanished into nowhere Zen New Jersey leaving a trail of 
     ambiguous picture postcards of Atlantic City Hall,
suffering Eastern sweats and Tangerian bone-grindings and 
     migraines of China under junk-withdrawal in Newark’s bleak 
     furnished room,
who wandered around and around at midnight in the railroad
     yard wondering where to go, and went, leaving no broken
     hearts,
who lit cigarettes in boxcars boxcars boxcars racketing
     through snow toward lonesome farms in grandfather night,
who studied Plotinus Poe St. John of the Cross telepathy and 
     bop kabbalah because the cosmos instinctively vibrated at
     their feet in Kansas, who loned it through the streets of
     Idaho seeking visionary indian angels who were visionary
     indian angels,
who thought they were only mad when Baltimore gleamed in
     supernatural ecstasy,
who jumped in limousines with the Chinaman of Oklahoma on
     the impulse of winter midnight streetlight smalltown rain,
who lounged hungry and lonesome through Houston seeking jazz
     or sex or soup, and followed the brilliant Spaniard to
     converse about America and Eternity, a hopeless task, and
     so took ship to Africa,
who disappeared into the volcanoes of Mexico leaving behind
     nothing but the shadow of dungarees and the lava and ash of
     poetry scattered in fireplace Chicago,
who reappeared on the West Coast investigating the FBI in
     beards and shorts with big pacifist eyes sexy in their dark
     skin passing out incomprehensible leaflets,
who burned cigarette holes in their arms protesting the
     narcotic tobacco haze of Capitalism,
who distributed Supercommunist pamphlets in Union Square
     weeping and undressing while the sirens of Los Alamos
     wailed them down, and wailed down Wall, and the Staten
     Island ferry also wailed,
who broke down crying in white gymnasiums naked and
     trembling before the machinery of other skeletons,
who bit detectives in the neck and shrieked with delight in
     policecars for committing no crime but their own wild
     cooking pederasty and intoxication,
who howled on their knees in the subway and were dragged off
     the roof waving genitals and manuscripts,
who let themselves be fucked in the ass by saintly motorcyclists,
     and screamed with joy,
who blew and were blown by those human seraphim, the sailors,
     caresses of Atlantic and Caribbean love,
who balled in the morning in the evenings in rosegardens and
     the grass of public parks and cemeteries scattering their
     semen freely to whomever come who may,
who hiccuped endlessly trying to giggle but wound up with a sob
     behind a partition in a Turkish Bath when the blond & naked
     angel came to pierce them with a sword,
who lost their loveboys to the three old shrews of fate the one  
     eyed shrew of the heterosexual dollar the one eyed shrew
     that winks out of the womb and the one eyed shrew that does
     nothing but sit on her ass and snip the intellectual golden
     threads of the craftsman’s loom.
who copulated ecstatic and insatiate with a bottle of beer a
     sweetheart a package of cigarettes a candle and fell off the
     bed, and continued along the floor and down the hall and
     ended fainting on the wall with a vision of ultimate cunt
     and come eluding the last gyzym of consciousness,
who sweetened the snatches of a million girls trembling in the
     sunset, and were red eyed in the morning but prepared to
     sweeten the snatch of the sunrise, flashing buttocks under
     barns and naked in the lake,
who went out whoring through Colorado in myriad stolen
     night-cars, N.C., secret hero of these poems, cocksman and
     Adonis of Denver--joy to the memory of his innumerable lays
     of girls in empty lots & diner backyards, moviehouses’
     rickety rows, on mountaintops in caves or with gaunt
     waitresses in familiar roadside lonely petticoat upliftings
     & especially secret gas-station solipsisms of johns, &
     hometown alleys too,
who faded out in vast sordid movies, were shifted in dreams,
     woke on a sudden Manhattan, and picked themselves up out
     of basements hungover with heartless Tokay and horrors of
     Third Avenue iron dreams & stumbled to unemployment
     offices,
who walked all night with their shoes full of blood on the
     snowbank docks waiting for a door in the East River to open
     to a room full of steamheat and opium,
who created great suicidal dramas on the apartment cliff-banks of
     the Hudson under the wartime blue floodlight of the moon &
     their heads shall be crowned with laurel in oblivion,
who ate the lamb stew of the imagination or digested the crab at
     the muddy bottom of the rivers of Bowery,
who wept at the romance of the streets with their pushcarts full
     of onions and bad music,
who sat in boxes breathing in the darkness under the bridge, and
     rose up to build harpsichords in their lofts,

who coughed on the sixth floor of Harlem crowned with flame
     under the tubercular sky surrounded by orange crates of
     theology,
who scribbled all night rocking and rolling over lofty incantations
     which in the yellow morning were stanzas of gibberish,
who cooked rotten animals lung heart feet tail borsht & tortillas
     dreaming of the pure vegetable kingdom,
who plunged themselves under meat trucks looking for an egg,
who threw their watches off the roof to cast their ballot for
     Eternity outside of Time, & alarm clocks fell on their heads
     every day for the next decade,
who cut their wrists three times successively unsuccessfully, gave
     up and were forced to open antique stores where they thought
     they were growing old and cried,
who were burned alive in their innocent flannel suits on Madison
     Avenue amid blasts of leaden verse & the tanked-up clatter of
     the iron regiments of fashion & the nitroglycerine shrieks of
     the fairies of advertising & the mustard gas of sinister
     intelligent editors, or were run down by the drunken taxicabs
     of Absolute Reality,
who jumped off the Brooklyn Bridge this actually happened and
     walked away unknown and forgotten into the ghostly daze of
     Chinatown soup alleyways & firetrucks, not even one free
     beer,
who sang out of their windows in despair, fell out of the subway
     window, jumped in the filthy Passaic, leaped on negroes, cried
     all over the street, danced on broken wineglasses barefoot
     smashed phonograph records of nostalgic European 1930s
     German jazz finished the whiskey and threw up groaning into
     the bloody toilet, moans in their ears and the blast of
     colossal steamwhistles,
who barreled down the highways of the past journeying to the
     each other’s hotrod-Golgotha jail-solitude watch or
     Birmingham jazz incarnation, who drove crosscountry
     seventytwo hours to find out if I had a vision or you had
     a vision or he had a vision to find out Eternity,
who journeyed to Denver, who died in Denver, who came back to
     Denver & waited in vain, who watched over Denver &
     brooded & loned in Denver and finally went away to find
     out the Time, & now Denver is lonesome for her heroes,
who fell on their knees in hopeless cathedrals praying for each
     other’s salvation and light and breasts, until the soul
     illuminated its hair for a second, 
who crashed through their minds in jail waiting for impossible
     criminals with golden heads and the charm of reality in their
     hearts who sang sweet blues to Alcatraz,
who retired to Mexico to cultivate a habit, or Rocky Mount to
     tender Buddha or Tangiers to boys or Southern Pacific to the
     black locomotive or Harvard to Narcissus to Woodlawn to the
     daisychain or grave,
who demanded sanity trials accusing the radio of hypnotism &
     were left with their insanity & their hands & a hung jury,
who threw potato salad at CCNY lecturers on Dadaism and
     subsequently presented themselves on the granite steps of
     the madhouse with shaven heads and harlequin speech of
     suicide, demanding instantaneous lobotomy,
and who were given instead the concrete void of insulin Metrazol
     electricity hydrotherapy psychotherapy occupational therapy
     pingpong & amnesia,
who in humorless protest overturned only one symbolic pingpong
     table, resting briefly in catatonia,
returning years later truly bald except for a wig of blood, and
     tears and fingers, to the visible madman doom of the wards of
     the madtowns of the East,
Pilgrim State’s Rockland’s and Greystone’s foetid halls, bickering
     with the echoes of the soul, rocking and rolling in the
     midnight solitude-bench dolmen-realms of love, dream of life
     a nightmare, bodies turned to stone as heavy as the moon,
with mother finally ******, and the last fantastic book flung out
     of the tenement window, and the last door closed at 4 a.m.
     and the last telephone slammed at the wall in reply and the
     last furnished room emptied down to the last piece of mental
     furniture, a yellow paper rose twisted on a wire hanger in the
     closet, and even that imaginary, nothing but a hopeful little
     bit of hallucination--
ah, Carl, while you are not safe I am not safe, and now you’re
     really in the total animal soup of time--
and who therefore ran through the icy streets obsessed with a
     sudden flash of the alchemy of the use of the ellipse the
     catalog the meter & the vibrating plane,
who dreamt and made incarnate gaps in Time & Space through
     images juxtaposed, and trapped the archangel of the soul
     between 2 visual images and joined the elemental verbs and
     set the noun and dash of consciousness together jumping
     with sensation of Pater Omnipotens Aeterna Deus
to recreate the syntax and measure of poor human prose and
     stand before you speechless and intelligent and shaking
     with shame, rejected yet confessing out the soul to conform
     to the rhythm of thought in his naked and endless head,
the madman bum and angel beat in Time, unknown, yet putting
     down here what might be left to say in time come after
     death,
and rose reincarnate in the ghostly clothes of jazz in the goldhorn
     shadow of the band and blew the suffering of America’s naked
     mind for love into an eli eli lamma lamma sabacthani
     saxophone cry that shivered the cities down to the last radio
with the absolute heart of the poem of life butchered out of their
     own bodies good to eat a thousand years.`
      },
      {
        id: 2,
        title: 'The victor will never be asked if he told the truth',
        createdAt: new Date(),
        updatedAt: new Date(),
        body: `The stronger must dominate and not mate with the weaker, which would signify the sacrifice of its own higher nature. Only the born weakling can look upon this principle as cruel, and if he does so it is merely because he is of a feebler nature and narrower mind; for if such a law did not direct the process of evolution then the higher development of organic life would not be conceivable at all.`
      },
      {
        id: 3,
        title: 'Words build bridges into unexplored regions.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'pierdolnie',
        createdAt: new Date(),
        updatedAt: new Date(),
        body: `no zobaczysz mati jak to wszystko pierdolnie
czekajcie tylko, jak to wszystko pierdolnie
tylko patrzeć jak to wszystko pierdolnie
na Ukrainie czołgi, zaraz to wszystko pierdolnie
na Islandii wulkan wybuchł, mówiłem, że to wszystko pierdolnie
nooo, teraz to już na pewno to wszystko pierdolnie
a nie mówiłem, że to wszystko pierdolnie?`
      },
      {
        id: 5,
        title: 'RIGCZ',
        createdAt: new Date(),
        updatedAt: new Date(),
        body:`No i ja się pytam człowieku dumny ty jesteś z siebie zdajesz sobie sprawę z tego co robisz?masz ty wogóle rozum i godność człowieka?Ja nie wiem ale żałosny typek z ciebie, chyba nie pomyślałes nawet co robisz i kogo obrażasz, możesz sobie obrażac tych co na to zasłużyli sobie ale nie naszego papieża polaka naszego rodaka wielką osobę ,i tak wyjątkowa i ważną bo to nie jest ktoś tam taki sobie że możesz go sobie wyśmiać bo tak ci się podoba nie wiem w jakiej ty się wychowałes rodzinie ale chyba ty nie wiem nie rozumiesz co to jest wiara`
      },
      {
        id: 6,
        title: 'The true knowledge',
        createdAt: new Date(),
        updatedAt: new Date(),
        body: `Life is a process of breaking down and using other matter, and if need be, other life. Therefore, life is aggression, and successful life is successful aggression. Life is the scum of matter, and people are the scum of life. There is nothing but matter, forces, space and time, which together make power. Nothing matters, except what matters to you. Might makes right, and power makes freedom. You are free to do whatever is in your power, and if you want to survive and thrive you had better do whatever is in your interests. If your interests conflict with those of others, let the others pit their power against yours, everyone for theirselves. If your interests coincide with those of others, let them work together with you, and against the rest. We are what we eat, and we eat everything.
All that you really value, and the goodness and truth and beauty of life, have their roots in this apparently barren soil.

This is the true knowledge.

We had founded our idealism on the most nihilistic implications of science, our socialism on crass self-interest, our peace on our capacity for mutual destruction, and our liberty on determinism. We had replaced morality with convention, bravery with safety, frugality with plenty, philosophy with science, stoicism with anaesthetics and piety with immortality. The universal acid of the true knowledge had burned away a world of words, and exposed a universe of things.

Things we could use.`}], {})
      .then(() => {
      return queryInterface.bulkInsert('tags', [
        {
          id: 1,
          name: 'hitler'
        },
        {
          id: 2,
          name: 'copypasta'
        },
        {
          id: 3,
          name: 'poetry'
        },
        {
          id: 4,
          name: 'NSFK'
        },
        {
          id: 5,
          name: 'PL'
        },
        {
          id: 6,
          name: 'politics'
        }

      ], {})
        .then(() => {
          return queryInterface.bulkInsert('PostTags', [
            {
              postId: 1,
              tagId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 1,
              tagId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 2,
              tagId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 3,
              tagId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 4,
              tagId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 4,
              tagId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 4,
              tagId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 4,
              tagId: 5,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 4,
              tagId: 6,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 5,
              tagId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 5,
              tagId: 5,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              postId: 6,
              tagId: 6,
              createdAt: new Date(),
              updatedAt: new Date()
            },

          ], {});
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('posts', null, {}), queryInterface.bulkDelete('tags', null, {}), queryInterface.bulkDelete('PostTags', null, {})]);
  }
};
