import {ImageProps} from 'react-native';

interface IStory {
  id: number;
  image: ImageProps | Readonly<ImageProps>;
  title: string;
  content: string;
}

const StoriesData: IStory[] = [
  {
    id: 1,
    image: require('../assets/stories/1.jpg'),
    title: 'The Last Stand of the Sunreavers',
    content: `In the mystical realm of Azeroth, where the echoes of ancient wars still linger, a new tale unfolds in the heart of the magical city of Dalaran. This is the story of Aethas Sunreaver, a proud blood elf and a leader of the Sunreavers, a faction of the Horde-aligned magi within the Kirin Tor.

    The Kirin Tor, a council of the most powerful mages in Azeroth, had long maintained a fragile neutrality in the ongoing conflict between the Alliance and the Horde. However, the winds of change were blowing, and with them came a storm that would test the very foundations of Dalaran.
    
    As tensions escalated between the Alliance and the Horde, Aethas found himself in an impossible situation. The Sunreavers, though part of the Kirin Tor, were increasingly viewed with suspicion by their Alliance counterparts. Matters came to a head when the Sunreavers were accused of aiding the Horde in stealing a powerful artifact from Dalaran.
    
    Jaina Proudmoore, the leader of the Kirin Tor, enraged by this betrayal, ordered the immediate expulsion of the Sunreavers from Dalaran. Aethas, caught between his loyalty to the Horde and his commitment to the Kirin Tor, made a fateful decision. He chose to stand with his people, the Sunreavers, in what would be their darkest hour.
    
    The streets of Dalaran erupted into chaos as the Silver Covenant, a militant faction of the Alliance, began a ruthless purge of the Sunreavers. Aethas, wielding his arcane powers, led a desperate defense against the overwhelming forces. The city's sky, usually bright with magical lights, was now a canvas for the flashes of spells and the cries of the fallen.
    
    In the midst of this turmoil, Aethas faced off against a formidable adversary, Vereesa Windrunner, the leader of the Silver Covenant. Their duel was a spectacle of arcane mastery, a dance of fire and ice, light and shadow. But in the end, the overwhelming numbers of the Alliance forces proved too much for the Sunreavers.
    
    Defeated and broken, Aethas and the remnants of his people were forced to flee Dalaran. The once proud faction of the Kirin Tor was now reduced to refugees, scattered and hunted.
    
    "The Last Stand of the Sunreavers" is a tale of loyalty, betrayal, and the harsh realities of war. It is a reminder that in the world of Azeroth, as in our own, the lines between right and wrong are often blurred, and the price of conviction can be devastatingly high.`,
  },
  {
    id: 2,
    image: require('../assets/stories/2.jpg'),
    title: 'The Shadow over Elwynn',
    content: `In the verdant lands of Elwynn Forest, where the sun often shone bright and the river waters sparkled like sapphires, a peculiar shadow had begun to creep. The villagers of Goldshire, known for their hearty laughter and busy taverns, grew silent as rumors of a mysterious figure surfaced.
    This figure was cloaked in darkness, with eyes that glowed like embers in the night. It was said to wander the forest, whispering in an ancient tongue that chilled the very air. The people of Elwynn, once so fearless, now barred their doors at dusk and huddled around fires, whispering tales of old.
    Among them was Elyra, a young mage of Stormwind, trained in the arcane arts. Curious and undeterred by the fearful whispers, she ventured into the forest, her staff alight with magical energy. The woods were eerily silent, the usual chatter of wildlife stilled. A sense of foreboding hung in the air, like a thick fog.
    As night fell, she found herself in a clearing bathed in moonlight. There, the mysterious figure appeared, its presence overwhelming yet strangely sorrowful. Elyra stood her ground, her blue robes fluttering in the wind.
    "Who are you? Why do you haunt these woods?" she asked, her voice steady.
    The figure's response was a melodic, sorrowful lament that seemed to echo the pain of centuries. Elyra, understanding the ancient language through her arcane studies, listened intently. The figure spoke of a time long forgotten, of a betrayal that bound its spirit to the forest, of a quest for redemption that seemed eternally out of reach.
    Elyra, moved by the spirit's plight, offered her help. "What can I do to free you from this curse?" she asked.
    The spirit's ember-like eyes softened. It spoke of an ancient relic, a crystal hidden deep within the forest, imbued with the power to release its bound soul. Elyra, determined to aid the spirit, embarked on a quest to find this crystal.
    The journey was perilous. She battled twisted creatures, remnants of the forest's corrupted magic, and navigated through labyrinthine paths that seemed to shift and change. Finally, in a hidden cave guarded by a slumbering dragon, she found the crystal, pulsating with an eerie light.
    With the crystal in hand, Elyra returned to the clearing. The spirit awaited, its form shimmering with anticipation. Elyra channeled her magic, and the crystal glowed brightly, its light enveloping the spirit.
    A great wind rose, and the spirit's form began to dissolve, its whispers turning into a song of gratitude and freedom. As the last of the spirit faded, the shadow over Elwynn lifted, the night air turning warmer, the sounds of the forest returning.
    Elyra stood alone in the clearing, a sense of peace filling her heart. She had not only unraveled a mystery but had freed a soul from its ancient torment. The villagers of Goldshire would speak of this night for generations, of the brave mage who lifted the shadow over Elwynn.
    And in the halls of Stormwind, her tale was told with wonder, a testament to the courage and compassion that dwelled within the heart of every hero of Azeroth.`,
  },
  {
    id: 3,
    image: require('../assets/stories/3.jpg'),
    title: "The Echoes of Icecrown: A Tale of the Lich King's Fall",
    content: `In the shadowed realms of Azeroth, where legends and nightmares intertwine, there existed a tale of horror and madness, centered around the dreaded Lich King, master of the Scourge. His fortress, the Icecrown Citadel, loomed ominously over the frozen wastes of Northrend, its spires piercing the sky like the talons of some monstrous bird.

    The Lich King, once a noble prince named Arthas, had fallen into darkness, his soul ensnared by the cursed runeblade, Frostmourne. In his twisted pursuit of power, Arthas had become an agent of terror, his very presence an omen of doom. The land around the Citadel, blanketed in perpetual winter, was a ghastly sight of frozen desolation, where the restless dead roamed under his iron will.
    
    One night, under a blood-red moon, a group of adventurers dared to venture into this accursed realm. They were driven by vengeance, honor, and a desperate hope to end the Lich King's reign. Among them was a brave paladin, a former comrade of Arthas, whose heart burned with a need for retribution. A mysterious warlock, adept in the dark arts, sought forbidden knowledge within the Citadel's walls. A stoic hunter, whose family had fallen to the Scourge, hunted with a silent fury. Accompanying them was a wise shaman, whose spirits whispered of an ancient prophecy.
    
    As they journeyed through the icy wilderness, they encountered horrors beyond mortal comprehension. Spectral figures lurked in the blizzard, their wails echoing in the wind. Undead creatures, twisted and grotesque, ambushed them with relentless ferocity. The very air seemed to whisper in a chilling chorus, filled with the agony of countless souls.
    
    The deeper they ventured, the more they felt the Lich King's corrupting influence. Paranoia and despair crept into their minds, turning them against each other. The warlock began to mutter dark incantations, eyes glowing with a malevolent light. The hunter, driven mad by grief and rage, turned his bow against his allies. The shaman, overwhelmed by the tormented spirits, began to lose her grasp on reality.
    
    In their darkest hour, it was the paladin who held steadfast. Clutching his holy symbol, he rallied his companions, reminding them of their purpose. With renewed determination, they battled through the Citadel, facing nightmarish guardians and traps that threatened to tear their souls apart.
    
    Finally, they stood before the Lich King himself. In a climactic battle, steel clashed against dark magic, and the air was filled with the cries of the fallen. The paladin, confronting the Lich King, saw a glimpse of the friend he once knew. In that moment of hesitation, Arthas struck a fatal blow. As the paladin fell, he whispered a prayer, his faith unbroken even in death.
    
    In the end, it was the shaman, drawing upon the ancient spirits, who delivered the final blow. The Lich King's armor cracked, and the light of a thousand souls burst forth, shattering the darkness. The Citadel crumbled, and the adventurers, battered and broken, emerged as unlikely heroes.
    
    Yet, as they left the ruins of Icecrown, a chilling doubt lingered. Was the Lich King truly defeated, or had they merely unleashed a greater evil upon the world? The wind carried their whispers across the frozen wasteland, leaving their tale to be recounted in hushed tones, a legend of horror and madness in the world of Azeroth.`,
  },
  {
    id: 4,
    image: require('../assets/stories/4.png'),
    title: 'The Last Stand of Thalorien Dawnseeker',
    content: `In the verdant lands of Quel'Thalas, where the sun gently kissed the ancient trees, Thalorien Dawnseeker, a renowned Blood Knight, faced his destiny. The air was thick with tension as the Scourge, a relentless undead army, advanced towards the Sunwell, the sacred source of the elves' power.

    Thalorien, with his radiant armor gleaming under the sun, stood at the forefront, his blade, Quel'Delar, humming with arcane energy. Beside him, a group of the finest elven warriors prepared to defend their homeland with their lives. The ground trembled under the march of the Scourge, their rotted forms a stark contrast to the vibrant beauty of Quel'Thalas.
    
    As the battle commenced, Thalorien's blade danced through the air, its light cleaving through the darkness of the undead. Elves and undead clashed in a cacophony of steel and magic, the fate of Quel'Thalas hanging in the balance.
    
    In the midst of the chaos, a gargantuan abomination, a monstrosity stitched together from the corpses of fallen enemies, lumbered towards Thalorien. With a battle cry that echoed through the forest, Thalorien charged, his blade aimed at the beast's grotesque heart.
    
    The abomination fell with a thunderous crash, but not before mortally wounding Thalorien. As he lay on the blood-soaked ground, his vision fading, Thalorien saw his comrades rallying, inspired by his bravery.
    
    In his final moments, Thalorien whispered a prayer to the Sunwell, asking for strength for his people. As his life ebbed away, a radiant light enveloped him, and the elves felt a surge of power, their spells burning brighter against the dark horde.
    
    The Scourge was repelled, but the victory was bittersweet. The elves mourned Thalorien, their fallen hero, whose sacrifice would be remembered for generations. In the heart of Quel'Thalas, a monument was erected in his honor, a testament to the courage and resilience of the elven people.
    
    And so, the legend of Thalorien Dawnseeker lived on, a beacon of hope in a world besieged by darkness.`,
  },
  {
    id: 5,
    image: require('../assets/stories/5.png'),
    title: 'Shadows Over Winterspring',
    content: `Deep in the frostbitten realm of Winterspring, a tale of mystery and heroism unfolded beneath the aurora-filled skies. The story centered around Lysara Moonshadow, a nimble Night Elf rogue renowned for her stealth and cunning. The serene beauty of Winterspring, with its snow-laden trees and icy peaks, was being tainted by a creeping darkness, an unknown force threatening the balance of nature.

    Lysara, with her sapphire eyes gleaming with determination, embarked on a quest to uncover the source of this corruption. Accompanied by her loyal frostsaber companion, Shadowstrike, she traversed the treacherous landscapes, from the shimmering Lake Kel'Theril to the ominous caves of Mazthoril.
    
    The journey was fraught with peril. Lysara encountered ferocious yetis in the Ice Thistle Hills and outwitted cunning kobolds mining the frosty caverns. But it was in the heart of the Ban'Thallow Barrow Den where she faced her greatest challenge.
    
    Within the den, veiled in a chilling mist, was a powerful Shade, a remnant of a forgotten druidic cult seeking to unleash an ancient curse upon the land. Lysara, using her agility and stealth, engaged the Shade in a dance of blades and shadow magic.
    
    The battle raged, the echoes of steel and spell reverberating through the frosty corridors. Just as the Shade was about to overwhelm her, Lysara found her opportunity. With a swift strike, she shattered the amulet that bound the Shade's essence, dispelling the darkness.
    
    As the Shade's curse lifted, a wave of rejuvenating energy flowed through Winterspring. The snow shone brighter, and the wildlife emerged from hiding, basking in the renewed purity of their home.
    
    Lysara returned to the Night Elf settlement of Starfall Village as a hero. Her bravery and skill had saved Winterspring from a fate of eternal darkness. The elders, in gratitude, named her "Guardian of the North," a title she bore with humble pride.
    
    Each night, as Lysara gazed upon the auroras of Winterspring, she knew that the shadows would always loom, but so too would there be those who would stand against them.`,
  },
  {
    id: 6,
    image: require('../assets/stories/6.png'),
    title: 'Echoes of the Dragon Isles',
    content: `In the newly rediscovered Dragon Isles, an ancient land steeped in magic and mystery, a thrilling tale unfolded, weaving the fates of dragons and mortals alike. This story centered on Elyndra, a courageous human mage, and her unexpected alliance with a young dragon, Azuragos.

    The Dragon Isles, once hidden by powerful enchantments, emerged from the mists of time, revealing landscapes untouched for centuries. Elyndra, driven by her thirst for knowledge and adventure, set sail to these mystical isles, seeking to uncover their secrets.
    
    Upon arrival, she was captivated by the Isles' splendor: towering mountains, lush valleys, and ancient ruins. It was in the Azure Span, a region dominated by crystal-clear lakes and azure skies, where Elyndra's path crossed with Azuragos, a dragon of the Blue Dragonflight.
    
    Azuragos, youthful and curious, was investigating disturbances in the magical ley lines of the Isles. The two formed an unlikely bond, united by a shared goal to preserve the balance of this primal land.
    
    Their journey led them through diverse landscapes, each more breathtaking than the last. They soared above the Waking Shores, where dragons of all flights congregated, and delved into the Ohn'ahran Plains, a vast, untamed wilderness.
    
    The duo soon discovered that the disturbances were the work of a renegade sect of the Twilight Dragonflight, seeking to harness the raw magical energy of the Isles for their dark purposes. Elyndra and Azuragos, along with allies they gathered along the way, prepared to confront this looming threat.
    
    The climactic battle unfolded in the Obsidian Citadel, a fortress shrouded in shadow and flame. Elyndra's mastery of arcane magic, combined with Azuragos's raw dragonfire, clashed against the twisted sorcery of the Twilight dragons.
    
    In the heat of the battle, Elyndra unleashed a spell of such power it shattered the citadel's foundations, while Azuragos's fiery breath turned the tide against the Twilight onslaught. The citadel crumbled, and the renegade dragons were defeated, their plans thwarted.
    
    In the aftermath, the Dragon Isles began to heal, the ley lines restored to their natural harmony. Elyndra and Azuragos, hailed as heroes, vowed to continue their guardianship of this ancient and wondrous land.
    
    Their story became a legend, a tale of bravery, friendship, and the eternal bond between the dragons and the peoples of Azeroth. The echoes of their deeds resonated through the Dragon Isles, a reminder of the wonders and dangers that lay within this mystical realm.`,
  },
  {
    id: 7,
    image: require('../assets/stories/7.png'),
    title: 'The Light of Azeroth',
    content: `In the heart of the Legion's assault on Azeroth, a tale of courage and sacrifice unfolded, one that would echo through the annals of history. This story revolved around Kaelis Sunstrider, a valiant Blood Elf Paladin, and his unwavering stand against the demonic forces threatening their world.

    As the Burning Legion, a relentless army of demons, launched their fiercest invasion upon Azeroth, the skies darkened, and despair spread across the land. Kaelis, clad in armor that gleamed with the light of the Sunwell, stood at the forefront of the resistance, his heart burning with a fervent desire to protect his homeland.
    
    The Broken Isles, a land steeped in ancient magic and lore, became the central battlefield. Kaelis, alongside warriors from all factions of Azeroth, journeyed to these fabled shores, facing treacherous terrains and formidable foes.
    
    In Val'sharah, a land of lush forests and ancient spirits, Kaelis fought to prevent the corruption of the Emerald Dream. Amidst the towering trees and ethereal glades, he battled nightmarish entities, his blade alight with holy fury.
    
    The journey led him to the haunted shores of Azsuna, where the ghosts of a fallen civilization whispered secrets of a forgotten past. Here, Kaelis and his allies thwarted the Legion's attempts to harness the arcane energies buried beneath the ancient ruins.
    
    But the greatest challenge awaited in Suramar, a city under the Legion's dark grip. Here, amidst its elegant spires and shadowed alleys, Kaelis rallied the oppressed citizenry, sparking a rebellion against their demonic oppressors.
    
    As the rebellion grew, Kaelis faced Gul'dan, the nefarious warlock behind the Legion's invasion, in the heart of the Nighthold. The battle was fierce, with arcane and fel energies clashing in a maelstrom of power. With a final, resolute strike, Kaelis vanquished Gul'dan, his light piercing through the darkness.
    
    In the wake of the battle, the skies of Azeroth cleared, the Legion's hold weakened. Kaelis, though weary, stood tall, his spirit unbroken. He had not only defended his land but also united the disparate peoples of Azeroth in their darkest hour.
    
    As word of his deeds spread, Kaelis Sunstrider became a symbol of hope and resilience. The people of Azeroth would remember him not just as a warrior, but as a beacon of light in a time when shadows threatened to engulf their world. His legacy would inspire future generations, a reminder that even in the face of overwhelming darkness, the light of courage and unity shines brightest.`,
  },
  {
    id: 8,
    image: require('../assets/stories/8.png'),
    title: 'Echoes of Outland',
    content: `In the tumultuous era of the Burning Crusade, when the Dark Portal reopened, bridging the worlds of Azeroth and Outland, a tale of adventure and valor emerged. This story revolves around Lyandra Swiftarrow, a daring Night Elf Hunter, and her journey through the shattered remnants of Draenor, now known as Outland.

    As adventurers from Azeroth poured into Outland, eager to explore and conquer, Lyandra, accompanied by her loyal pet, a fierce nightsaber named Shadowpelt, embarked on a quest to uncover the secrets of this alien land and thwart the nefarious plans of the Burning Legion.
    
    Their first steps into Hellfire Peninsula were met with a war-torn landscape, where the Legion's influence was ever-present. Lyandra aided the forces of the Alliance in fortifying their position against the Legion's onslaught, her arrows finding their mark among the ranks of the demonic invaders.
    
    Venturing further, she discovered the lush, exotic forests of Zangarmarsh. Here, amidst towering mushrooms and mysterious spore creatures, Lyandra encountered the enigmatic Draenei, forging alliances and delving into the mysteries of the land, including the depletion of the precious waters by the Naga.
    
    The journey took a perilous turn in the shadowy realm of Terokkar Forest, where the ghosts of a once-great civilization lingered. In the eerie ruins of Auchindoun, Lyandra battled ethereal spirits and cultists, unraveling a plot to unleash an ancient evil upon Outland.
    
    In the heart of Nagrand, a land of windswept plains and floating islands, Lyandra encountered the noble Orcs of the Mag'har, untouched by the corruption that plagued their brethren. Here, she learned of the complex history of the Orcs and their deep connection to the land.
    
    The apex of her journey led her to the tempestuous region of Shadowmoon Valley, the stronghold of the nefarious Illidan Stormrage and his lieutenants. Amidst the scorched earth and fel-infused skies, Lyandra fought valiantly against the Legion's minions, drawing ever closer to the Black Temple.
    
    In a climactic confrontation within the dark walls of the Temple, Lyandra and her allies faced Illidan in an epic battle. Through skill, courage, and the bonds forged throughout her journey, they emerged victorious, ending the reign of the Betrayer.
    
    As peace momentarily settled over Outland, Lyandra gazed upon the shattered landscape, a testament to the resilience of its inhabitants and the adventurers who fought to protect it. Her name became legend among the taverns and camps of both Outland and Azeroth, a symbol of the indomitable spirit of those who brave the unknown for the sake of adventure and justice.
    
    Thus, the echoes of Lyandra Swiftarrow's deeds resonated through the portals and across worlds, a reminder of the ever-present vigilance against the shadows that seek to engulf the light.`,
  },
  {
    id: 9,
    image: require('../assets/stories/9.png'),
    title: 'Veil of the Shadowlands',
    content: `In the era of the Shadowlands, when the veil between life and death was torn asunder, a gripping tale of mystery and redemption unfolded. This story centers around Erevan Nightbreeze, a stoic Worgen Death Knight, and his journey through the enigmatic realms of the afterlife.

    The adventure began when Erevan, seeking to understand the fate of departed souls, ventured into the Shadowlands. The first realm he encountered was Bastion, a place of resplendent skies and gleaming spires, where noble souls trained to become Kyrian. Despite the realm's serene beauty, Erevan sensed an underlying tension, a conflict threatening to unravel the order of the afterlife.
    
    In Maldraxxus, the realm of might and ambition, Erevan found himself amidst endless battles, where the strong honed their skills and the weak perished. Here, he allied with the Necrolords, uncovering a plot to usurp the balance of power within the Shadowlands.
    
    The journey took a somber turn in Ardenweald, a mystical forest where spirits of nature were tended to before their rebirth. Erevan witnessed the heart-wrenching dilemma of the Winter Queen, forced to sacrifice parts of her realm to preserve the greater cycle of life and death.
    
    In the gothic spires of Revendreth, where souls burdened with pride and hubris were sent for redemption, Erevan faced his own past transgressions. He navigated the realm's treachery and intrigue, aiding the Venthyr in their struggle against the malevolent Sire Denathrius, whose actions threatened to drain the very essence of the Shadowlands.
    
    Amidst these trials, Erevan uncovered a more sinister threat: The Jailer, a being intent on reshaping the cosmos according to his twisted vision. Erevan's path led him to the Maw, a desolate land of despair, where the most dangerous souls were imprisoned. Here, he forged unlikely alliances, including with the enigmatic Broker, Ve'nari, to thwart the Jailer's plans.
    
    In the climactic confrontation at the heart of the Maw, Erevan and his allies faced the Jailer in a battle that transcended realms. With the very fabric of the afterlife at stake, Erevan's resolve was tested as never before. In a moment of selfless sacrifice, he utilized the powers he had gained in his journey to seal the rift in the veil, restoring balance to the Shadowlands.
    
    As Erevan returned to Azeroth, his story became a legend whispered in the halls of Oribos and beyond. His journey through the Shadowlands had changed him, imparting a deeper understanding of life, death, and the intricate balance between. Erevan Nightbreeze's name was etched in the annals of history, a testament to the enduring spirit of those who face the unknown and emerge transformed.`,
  },
  {
    id: 10,
    image: require('../assets/stories/10.png'),
    title: 'The War Within: Shadows of Teldrassil',
    content: `In the turbulent times following the burning of Teldrassil, a deeply personal and poignant tale of conflict and resilience unfolded. This story centers around Thalendra Moonwhisper, a Night Elf Druid, and her struggle to cope with the devastating loss of her home and to confront the internal and external conflicts that arose from this tragedy.

    The tale begins with Thalendra standing amidst the charred remains of Teldrassil, her heart heavy with grief. The once-majestic World Tree, a symbol of Night Elf strength and unity, lay in ruins, its destruction at the hands of the Horde leaving a deep scar in the Night Elf psyche.
    
    Vowing to seek justice and rebuild, Thalendra embarked on a journey across Azeroth. Her first stop was Stormwind, where she worked alongside the Alliance leaders, advocating for aid and refuge for her people. Here, she grappled with the political complexities of war, realizing that the path to peace and rebuilding was fraught with diplomatic challenges.
    
    In her quest, Thalendra ventured into the dark corners of Ashenvale, where skirmishes between the Horde and Alliance flared. Amidst the shadowy woods and ancient ruins, she led guerrilla attacks against the encroaching Horde forces, her druidic powers both a balm to her allies and a terror to her foes.
    
    However, the physical battles were only part of her struggle. Thalendra faced an internal war, one between her desire for vengeance and her innate connection to the natural balance. She sought counsel in the serene groves of Moonglade, where wise druids reminded her of the importance of healing and growth, even in the face of great loss.
    
    In a pivotal moment, Thalendra's journey led her to a clandestine meeting in Darnassus' ruins, where she met with emissaries of the Horde seeking reconciliation. Torn between her quest for retribution and the potential for peace, Thalendra found herself at a crossroads that would define her path forward.
    
    The climax of her story came in a dramatic encounter on the shores of Darkshore, where a final battle raged. Thalendra, embracing the full might of her druidic abilities, turned the tide, not through destruction, but by revitalizing the land, causing brambles and vines to impede the enemy while healing her allies.
    
    As the dust settled, Thalendra stood as a symbol of both the enduring spirit of the Night Elves and the potential for healing even the deepest of wounds. Her story, "The War Within: Shadows of Teldrassil," became a beacon of hope and a reminder that even amidst the ravages of war, the seeds of peace and renewal can be sown.`,
  },
];

export {StoriesData};
export type {IStory};
