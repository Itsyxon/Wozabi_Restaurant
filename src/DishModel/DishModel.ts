export interface Dish {
  id: number
  name: string
  img: string
  price: number
}

const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Ролл "Наоми"',
    img: require('../assets/naomi.jpg'),
    price: 600,
  },
  {
    id: 2,
    name: 'Ролл "Дракон"',
    img: require('../assets/dragon.jpg'),
    price: 560,
  },
  {
    id: 3,
    name: 'Спайс в лососе',
    img: require('../assets/roll.jpg'),
    price: 350,
  },
  {
    id: 4,
    name: 'Салат "Поке с лососем"',
    img: require('../assets/poke.jpg'),
    price: 490,
  },
  {
    id: 5,
    name: 'Ролл "Филадельфия',
    img: require('../assets/ph.jpg'),
    price: 750,
  },
  {
    id: 6,
    name: 'Ролл "Калифорния"',
    img: require('../assets/kaliforniya.jpg'),
    price: 750,
  },
  {
    id: 7,
    name: 'Ролл "Каса-Яма"',
    img: require('../assets/kasa.jpg'),
    price: 750,
  },
  {
    id: 8,
    name: 'Ролл "Филадельфия с угрем"',
    img: require('../assets/phu.jpg'),
    price: 750,
  },
  {
    id: 9,
    name: 'Ролл "Магуро"',
    img: require('../assets/maguro.jpg'),
    price: 750,
  },
  {
    id: 10,
    name: 'Ролл "Киото"',
    img: require('../assets/kyoto.jpg'),
    price: 920,
  },
  {
    id: 11,
    name: 'Ролл "Острый с окунем"',
    img: require('../assets/sp_o.jpg'),
    price: 750,
  },
  {
    id: 12,
    name: 'Ролл-никкей с угрём и манго',
    img: require('../assets/nik.jpg'),
    price: 750,
  },
]

export default DISHES
