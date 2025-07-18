import { TAGS } from "../enums/tags";
import image from "../types/image";

export const images: { [name: string]: image } = {
  CHAT_GIROUETTE: {
    name: "Chat Girouette",
    description: "A chill morning sunrise on the countryside",
    link: "assets/images/ChatGirouette.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  CAT_BRIDGE: {
    name: "Cat Bridge",
    description: "Taking the natural bridge to the other side of the river",
    link: "assets/images/CatBridge.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  CAT_WATERFALL: {
    name: "Cat Waterfall",
    description: "Cat's paradise'",
    link: "assets/images/CatWaterfall.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.ISOMETRIC],
  },
  CHILL_PLACE: {
    name: "Chill Place",
    description: "A cosy cottage",
    link: "assets/images/ChillPlace.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.ISOMETRIC],
  },
  DRAGONS_LAIR: {
    name: "Dragons Lair",
    description: "Dragon chilling on his own pile of gold",
    link: "assets/images/Dragon.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.CHARACTER],
  },
  DREAMERS_PARADIGM: {
    name: "Dreamers Paradigm",
    description: "Ethereal Sunrise",
    link: "assets/images/DreamersParadigm.png",
    tags: [],
  },
  LIGHTHOUSE: {
    name: "Lighthouse",
    description: "Sometimes you better let the lights out",
    link: "assets/images/Lighthouse.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  MILKY_WAY: {
    name: "Milky Way",
    description: "On it's own floaty way",
    link: "assets/images/MilkyWay.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  SANCTUARY: {
    name: "Forgotten Sanctuary",
    description: "Lost sanctuary, art based on photograph",
    link: "assets/images/Sanctuary.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  THE_SCHOLAR: {
    name: "The Scholar",
    description: "Inspired on the Discworld's librarian",
    link: "assets/images/ScholarLush.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.CHARACTER],
  },
  SHATTERED_PARADIGM: {
    name: "Shattered Paradigm",
    description: "Ethereal Dusk",
    link: "assets/images/Shattered.png",
    tags: [],
  },
  SKULLSPLITTER: {
    name: "Skullsplitter Archipelago",
    description: "Shallow waters and a cosy yet strange port",
    link: "assets/images/Skullsplitter.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  SKYFORGE: {
    name: "Skyforge",
    description: "Blacksmith AND gardener.",
    link: "assets/images/Skyforge.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.ISOMETRIC],
  },
  SOUTH_SHORE: {
    name: "South Shore",
    description: "Southshore tower shines on you",
    link: "assets/images/SouthShore.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.CHARACTER],
  },
  SUNNY_LIGHTHOUSE: {
    name: "Sunny Lighthouse",
    description: "Captain Catou and the sunrise lighthouse",
    link: "assets/images/SunnyLighthouse.png",
    tags: [TAGS.ENVIRONMENTAL],
  },
  THE_BEAST: {
    name: "The Beast",
    description: "*The Sky above cracked open*",
    link: "assets/images/TheBeast.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.CHARACTER],
  },
  VOID: {
    name: "Void",
    description: "A void portal, and a peculiar bird",
    link: "assets/images/Void.png",
    tags: [TAGS.ENVIRONMENTAL, TAGS.ISOMETRIC],
  },
};

export const animatedImages: { [name: string]: image } = {
  ARACHNOPHOBIA: {
    name: "Arachnophobia",
    description: "8 legs, 8 eyes, 1 cave",
    link: "assets/gifs/Arachnophobia.gif",
    tags: [TAGS.ANIMATED],
  },
  CAPTAIN_ANIM_PACK: {
    name: "Captain Anim Pack",
    description: "Captain Catou animations for a potential 2D game",
    link: "assets/gifs/CaptainAnimPack.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  CHEST_DROP: {
    name: "Chest Drop",
    description: "Chest Drop animation made for my twitch channel sub event",
    link: "assets/gifs/ChestDrop.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  HYPE_TRAIN: {
    name: "Hype Train",
    description: "Hype Train animation made for my twitch channel event",
    link: "assets/gifs/HypeTrain.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  LAMBERT: {
    name: "Lambert",
    description: "A Lambert fan art",
    link: "assets/gifs/Lambert.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  OBJECTIF_TERMINE: {
    name: "Goal Reached !",
    description: "Animation made for my twitch channel goal event",
    link: "assets/gifs/ObjectifTermine.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  PILUL_RAID: {
    name: "Raid fiesta",
    description: "Animation made for my twitch channel raid event",
    link: "assets/gifs/PilulRaid.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  ROR_MERC: {
    name: "Ror Merc",
    description: "Mercenary from Risk of Rain 2 fan art",
    link: "assets/gifs/RoRMerc.gif",
    tags: [TAGS.ENVIRONMENTAL, TAGS.ANIMATED, TAGS.CHARACTER],
  },
  SNAIL: {
    name: "Snail",
    description: "Snailriding merchant",
    link: "assets/gifs/Snail.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  SPYGLASS: {
    name: "Spyglass",
    description: "animation made for my twitch channel follow event",
    link: "assets/gifs/Spyglass.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  },
  DOCUMENTS: {
    name: "Documents",
    description: "Special operation by night",
    link: "assets/gifs/Documents.gif",
    tags: [TAGS.ANIMATED, TAGS.CHARACTER],
  }
};
