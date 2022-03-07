const purple = [
  {
    id: 23,
    category: "Purple",
    purchase_name: "Purple",
    src: "/purplejelly/jelly_guy_purple_chef.png",
    alt: "a purple jelly wearing a chef hat",
    price: 50,
  },
  {
    id: 20,
    purchase_name: "Purple and Chef Hat",
    src: "/purplejelly/jelly_guy_purple_chef.png",
    alt: "a purple jelly wearing a chef hat",
    price: 50,
  },
  {
    id: 21,
    purchase_name: "Purple and Mexican Hat",
    src: "/purplejelly/jelly_guy_purple_mex.png",
    alt: "a purple jelly wearing a Mexican hat",
    price: 50,
  },
  {
    id: 22,
    purchase_name: "Purple and Sheriff Hat",
    src: "/purplejelly/jelly_guy_purple_sheriff.png",
    alt: "a purple jelly wearing a Sheriff hat",
    price: 50,
  },
];

const blue = [
  {
    id: 1,
    category: "Blue",
    purchase_name: "Blue",
    src: "/jelly_guy_blue.png",
    alt: "blue-bean",
    price: 20,
  },
  {
    id: 11,
    purchase_name: "Blue and Chef Hat",
    src: "/bluejelly/blue_chefHat.png",
    alt: "a blue jelly wearing a chef hat",
    price: 50,
  },
  {
    id: 12,
    purchase_name: "Blue and Mexican Hat",
    src: "/bluejelly/blue_mexicanHat.png",
    alt: "a blue jelly wearing a mexican hat",
    price: 50,
  },
  {
    id: 13,
    purchase_name: "Blue and Sheriff Hat",
    src: "/bluejelly/blue_sheriffHat.png",
    alt: "a blue jelly wearing a sheriff hat",
    price: 50,
  },
];

const green = [
  {
    id: 2,
    category: "Green",
    purchase_name: "Green",
    src: "/jelly_guy_green.png",
    alt: "green-bean",
    price: 20,
  },
  {
    id: 14,
    purchase_name: "Green and Chef Hat",
    src: "/greenjelly/green_chefHat.png",
    alt: "a green jelly wearing a chef hat",
    price: 50,
  },
  // {
  //   id: 15,
  //   purchase_name: "Green Sheriff Jelly in Mars",
  //   src: "/greenjelly/green_mars_sheriff_moustache.jpg",
  //   alt: "a green jelly wearing a chef hat",
  //   price: 90,
  // },
  {
    id: 16,
    purchase_name: "Green and Mexican Hat",
    src: "/greenjelly/green_mexicanHat.png",
    alt: "a green jelly wearing a mexican hat",
    price: 50,
  },
];

const red = [
  {
    id: 3,
    category: "Red",
    purchase_name: "Red",
    src: "/jelly_guy_red.png",
    alt: "red-bean",
    price: 20,
  },
  {
    id: 17,
    purchase_name: "Red and Chef Hat",
    src: "/redjelly/jelly_guy_red_chefHat.png",
    alt: "a red jelly wearing a chef hat",
    price: 50,
  },
  {
    id: 18,
    purchase_name: "Red and Mexican Hat",
    src: "/redjelly/jelly_guy_red_mexicanHat.png",
    alt: "a red jelly wearing a mexican hat",
    price: 50,
  },
  // {
  //   id: 19,
  //   purchase_name: "Red Chef Jelly in a Madow",
  //   src: "/redjelly/redJelly_chef_meadow.png",
  //   alt: "a chef red jelly bean in a meadow",
  //   price: 90,
  // },
];

const yellow = [
  {
    id: 4,
    category: "Yellow",
    purchase_name: "Yellow",
    src: "/yellowjelly/yellowJelly_resize.png",
    alt: "jellies",
    price: 20,
  },
  {
    id: 8,
    purchase_name: "Yellow and Chef Hat",
    src: "/yellowjelly/yellowJelly_chefHat.png",
    alt: "a yellow jelly wearing a chef hat",
    price: 50,
  },
  {
    id: 9,
    purchase_name: "Mexican Yellow Jelly",
    src: "/yellowjelly/yellowJelly_mexicanHat_moustache.png",
    alt: "a mexican yellow jelly with moustache wearing a chef hat",
    price: 90,
  },
  {
    id: 10,
    purchase_name: "Yellow and Sheriff Hat",
    src: "/yellowjelly/yellowJelly_sheriffHat.png",
    alt: "a yellow jelly wearing a sheriff hat",
    price: 50,
  },
];

export const sections = [
  {
    id: 1,
    name: "social",
    categories: ["Drink", "Food", "Travel", "Occasions", "Holiday"],
  },
  {
    id: 2,
    name: "financial",
    categories: ["Interest Rates", "Currency", "Mortgages", "Charity", "Savings"],
  },
  {
    id: 3,
    name: "wellbeing",
    categories: ["Health", "Exercise", "Nutrition", "Mindfulness", "Weight"],
  },
  {
    id: 4,
    name: "general",
    categories: ["Addition", "Subtraction", "Multiplication", "Division", "Further"],
  },
  {
    id: 5,
    name: "home",
    categories: ["Gardening", "Shopping", "Cooking", "Chores", "DIY"],
  },
];

export default [purple, blue, green, red, yellow];
