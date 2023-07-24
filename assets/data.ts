import { ICategory } from "./types"

export const categories: ICategory[] = [
  {
    id: 1,
    title: "Транспорт",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Легковые автомобили",
      "Грузовые автомобили",
      "Автозапчасти и аксессуары",
      "Шины и колёса",
      "Прицепы",
      "Мото",
      "Другое",
    ],
  },

  {
    id: 2,
    title: "Недвижимость",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: ["Квартиры", "Дома", "Земля", "Гаражи", "Другое"],
  },

  {
    id: 3,
    title: "Электроника",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Телeфон",
      "Компьютер",
      "Фото/видео техника",
      "Телевизор",
      "Техника для дома",
      "Комплектующие",
      "Другое",
    ],
  },

  {
    id: 4,
    title: "Недвижимость",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: ["Квартиры", "Дома", "Земля", "Гаражи", "Другое"],
  },
  {
    id: 5,
    title: "Дом и сад",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",
    subCategories: [
      "Мебель",
      "Сад/огород",
      "Растения",
      "Гаражи",
      "Инструменты",
      "Другое",
    ],
  },

  {
    id: 6,
    title: "Мода и стиль",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Одежда",
      "Обувь",
      "Наручные Часы",
      "Аксессуары",
      "Подарки",
      "Косметика",
      "Парфюмерия",
      "Средства по уходу",
    ],
  },
]

export const productCondition = [
  {
    name: "Новое",
    value: "new",
    label: "Новое",
  },
  {
    name: "Б/у",
    value: "used",
    label: "Б/у",
  },
]

export const productType = [
  {
    name: "Свое",
    value: "mine",
    label: "Продаю свое",
  },
  {
    name: "Товар приобретен на продажу",
    value: "toSelling",
    label: "Приобретен на продажу",
  },
]
